package com.nanstar.note;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        registerPlugin(NanStarUpdaterPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
