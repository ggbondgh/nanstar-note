package com.nanstar.note;

import android.content.ActivityNotFoundException;
import android.content.ClipData;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.os.Handler;
import android.os.Looper;
import android.provider.Settings;
import androidx.core.content.FileProvider;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Locale;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@CapacitorPlugin(name = "NanStarUpdater")
public class NanStarUpdaterPlugin extends Plugin {
    private final ExecutorService executor = Executors.newSingleThreadExecutor();
    private final Handler mainHandler = new Handler(Looper.getMainLooper());
    private final Object installLock = new Object();
    private File pendingApkFile = null;
    private PluginCall pendingInstallCall = null;
    private boolean installInProgress = false;

    @PluginMethod
    public void installApk(PluginCall call) {
        String url = call.getString("url");
        if (url == null || url.trim().isEmpty()) {
            call.reject("Missing APK url");
            return;
        }

        synchronized (installLock) {
            if (installInProgress) {
                call.reject("APK download already in progress", "download_in_progress");
                return;
            }
            installInProgress = true;
        }

        executor.execute(() -> {
            try {
                File apkFile = downloadApk(url.trim());
                runOnMainThread(() -> openInstaller(apkFile, call));
            } catch (Exception error) {
                notifyDownloadProgress(0, 0, "failed");
                rejectOnMainThread(call, error.getMessage(), "install_failed", error);
                finishInstall();
            }
        });
    }

    private File downloadApk(String urlText) throws IOException {
        File baseDir = getContext().getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
        if (baseDir == null) {
            baseDir = getContext().getCacheDir();
        }
        File dir = new File(baseDir, "updates");
        if (!dir.exists() && !dir.mkdirs()) {
            throw new IOException("Cannot create update directory");
        }

        cleanupOldApks(dir);
        File apkFile = new File(dir, "nanstar-note-update-" + System.currentTimeMillis() + ".apk");

        HttpURLConnection connection = (HttpURLConnection) new URL(urlText).openConnection();
        connection.setInstanceFollowRedirects(true);
        connection.setUseCaches(false);
        connection.setConnectTimeout(20000);
        connection.setReadTimeout(60000);
        connection.setRequestProperty("Accept", "application/vnd.android.package-archive");
        connection.setRequestProperty("Cache-Control", "no-cache");
        connection.setRequestProperty("User-Agent", "NanStar-Note-Android");

        int status = connection.getResponseCode();
        if (status < 200 || status >= 300) {
            connection.disconnect();
            throw new IOException("APK download failed: HTTP " + status);
        }

        String contentType = connection.getContentType();
        if (contentType != null && contentType.toLowerCase(Locale.ROOT).contains("text/html")) {
            connection.disconnect();
            throw new IOException("APK download returned HTML instead of an APK");
        }

        long totalBytes = connection.getContentLengthLong();
        try (InputStream input = connection.getInputStream(); FileOutputStream output = new FileOutputStream(apkFile)) {
            byte[] buffer = new byte[8192];
            int read;
            long downloadedBytes = 0;
            long lastProgressAt = 0;
            int lastPercent = -1;
            notifyDownloadProgress(0, totalBytes, "downloading");
            while ((read = input.read(buffer)) != -1) {
                output.write(buffer, 0, read);
                downloadedBytes += read;
                int percent = totalBytes > 0
                    ? (int) Math.min(100, (downloadedBytes * 100L) / totalBytes)
                    : -1;
                long now = System.currentTimeMillis();
                if (percent != lastPercent || now - lastProgressAt >= 100) {
                    notifyDownloadProgress(downloadedBytes, totalBytes, "downloading");
                    lastProgressAt = now;
                    lastPercent = percent;
                }
            }
            output.flush();
            output.getFD().sync();
            notifyDownloadProgress(downloadedBytes, totalBytes, "completed");
        } finally {
            connection.disconnect();
        }

        if (apkFile.length() <= 0) {
            throw new IOException("Downloaded APK is empty");
        }
        return apkFile;
    }

    private void cleanupOldApks(File dir) {
        File[] files = dir.listFiles((file, name) ->
            name.startsWith("nanstar-note-update-") && name.endsWith(".apk")
        );
        if (files == null) return;

        long cutoff = System.currentTimeMillis() - 24L * 60L * 60L * 1000L;
        for (File file : files) {
            if (file.lastModified() < cutoff) {
                file.delete();
            }
        }
    }

    private void notifyDownloadProgress(long loadedBytes, long totalBytes, String state) {
        JSObject progress = new JSObject();
        progress.put("state", state);
        progress.put("loaded", loadedBytes);
        progress.put("total", totalBytes);
        progress.put("percent", totalBytes > 0
            ? Math.min(100, (int) ((loadedBytes * 100L) / totalBytes))
            : -1);
        notifyListeners("downloadProgress", progress);
    }

    private void openInstaller(File apkFile, PluginCall call) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && !getContext().getPackageManager().canRequestPackageInstalls()) {
            pendingApkFile = apkFile;
            pendingInstallCall = call;
            Intent settingsIntent = new Intent(
                Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,
                Uri.parse("package:" + getContext().getPackageName())
            );
            settingsIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            try {
                getContext().startActivity(settingsIntent);
            } catch (ActivityNotFoundException error) {
                clearPendingInstall();
                call.reject("Allow Nanstar to install unknown apps, then tap download again.", "unknown_sources", error);
                finishInstall();
            }
            return;
        }

        try {
            launchInstaller(apkFile);
            resolveInstallStarted(call, apkFile);
            finishInstall();
        } catch (UnknownSourceException error) {
            call.reject(error.getMessage(), "install_failed", error);
            finishInstall();
        } catch (Exception error) {
            call.reject(error.getMessage(), "install_failed", error);
            finishInstall();
        }
    }

    private void launchInstaller(File apkFile) throws UnknownSourceException {
        Uri apkUri = FileProvider.getUriForFile(
            getContext(),
            getContext().getPackageName() + ".fileprovider",
            apkFile
        );

        Intent installIntent = new Intent(Intent.ACTION_INSTALL_PACKAGE);
        installIntent.setData(apkUri);
        installIntent.putExtra(Intent.EXTRA_RETURN_RESULT, false);
        addApkReadPermission(installIntent, apkUri);

        try {
            getContext().startActivity(installIntent);
            return;
        } catch (ActivityNotFoundException ignored) {
            // Some Android skins only expose the installer through ACTION_VIEW.
        }

        Intent fallbackIntent = new Intent(Intent.ACTION_VIEW);
        fallbackIntent.setDataAndType(apkUri, "application/vnd.android.package-archive");
        addApkReadPermission(fallbackIntent, apkUri);

        try {
            getContext().startActivity(fallbackIntent);
        } catch (ActivityNotFoundException error) {
            throw new UnknownSourceException("No Android package installer found.");
        }
    }

    private void addApkReadPermission(Intent intent, Uri apkUri) {
        intent.setClipData(ClipData.newUri(getContext().getContentResolver(), "Nanstar APK", apkUri));
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
    }

    private void resolveInstallStarted(PluginCall call, File apkFile) {
        JSObject result = new JSObject();
        result.put("path", apkFile.getAbsolutePath());
        call.resolve(result);
    }

    @Override
    protected void handleOnResume() {
        if (pendingApkFile == null || pendingInstallCall == null) return;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && !getContext().getPackageManager().canRequestPackageInstalls()) {
            PluginCall call = pendingInstallCall;
            clearPendingInstall();
            call.reject("Allow Nanstar to install unknown apps, then tap download again.", "unknown_sources");
            finishInstall();
            return;
        }

        File apkFile = pendingApkFile;
        PluginCall call = pendingInstallCall;
        clearPendingInstall();
        openInstaller(apkFile, call);
    }

    @Override
    protected void handleOnDestroy() {
        executor.shutdownNow();
    }

    private void clearPendingInstall() {
        pendingApkFile = null;
        pendingInstallCall = null;
    }

    private void finishInstall() {
        synchronized (installLock) {
            installInProgress = false;
        }
    }

    private void runOnMainThread(Runnable action) {
        if (Looper.myLooper() == Looper.getMainLooper()) {
            action.run();
        } else {
            mainHandler.post(action);
        }
    }

    private void rejectOnMainThread(PluginCall call, String message, String code, Exception error) {
        runOnMainThread(() -> call.reject(message, code, error));
    }

    private static class UnknownSourceException extends Exception {
        UnknownSourceException(String message) {
            super(message);
        }
    }
}
