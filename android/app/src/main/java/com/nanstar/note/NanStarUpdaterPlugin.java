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
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@CapacitorPlugin(name = "NanStarUpdater")
public class NanStarUpdaterPlugin extends Plugin {
    private final ExecutorService executor = Executors.newSingleThreadExecutor();
    private final Handler mainHandler = new Handler(Looper.getMainLooper());
    private File pendingApkFile = null;
    private PluginCall pendingInstallCall = null;

    @PluginMethod
    public void installApk(PluginCall call) {
        String url = call.getString("url");
        if (url == null || url.trim().isEmpty()) {
            call.reject("Missing APK url");
            return;
        }

        executor.execute(() -> {
            try {
                File apkFile = downloadApk(url.trim());
                runOnMainThread(() -> openInstaller(apkFile, call));
            } catch (Exception error) {
                rejectOnMainThread(call, error.getMessage(), "install_failed", error);
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

        File apkFile = new File(dir, "nanstar-note-update.apk");
        if (apkFile.exists() && !apkFile.delete()) {
            throw new IOException("Cannot replace old APK");
        }

        HttpURLConnection connection = (HttpURLConnection) new URL(urlText).openConnection();
        connection.setInstanceFollowRedirects(true);
        connection.setConnectTimeout(20000);
        connection.setReadTimeout(60000);
        connection.setRequestProperty("User-Agent", "NanStar-Note-Android");

        int status = connection.getResponseCode();
        if (status < 200 || status >= 300) {
            throw new IOException("APK download failed: HTTP " + status);
        }

        try (InputStream input = connection.getInputStream(); FileOutputStream output = new FileOutputStream(apkFile)) {
            byte[] buffer = new byte[8192];
            int read;
            while ((read = input.read(buffer)) != -1) {
                output.write(buffer, 0, read);
            }
            output.flush();
            output.getFD().sync();
        } finally {
            connection.disconnect();
        }

        if (apkFile.length() <= 0) {
            throw new IOException("Downloaded APK is empty");
        }
        return apkFile;
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
                call.reject("Allow NanStar Note to install unknown apps, then tap download again.", "unknown_sources", error);
            }
            return;
        }

        try {
            launchInstaller(apkFile);
            resolveInstallStarted(call, apkFile);
        } catch (UnknownSourceException error) {
            call.reject(error.getMessage(), "install_failed", error);
        } catch (Exception error) {
            call.reject(error.getMessage(), "install_failed", error);
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
        intent.setClipData(ClipData.newUri(getContext().getContentResolver(), "NanStar Note APK", apkUri));
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
            call.reject("Allow NanStar Note to install unknown apps, then tap download again.", "unknown_sources");
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
