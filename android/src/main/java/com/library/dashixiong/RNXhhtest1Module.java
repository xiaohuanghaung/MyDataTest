
package com.library.dashixiong;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNXhhtest1Module extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNXhhtest1Module(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNXhhtest1";
  }
}