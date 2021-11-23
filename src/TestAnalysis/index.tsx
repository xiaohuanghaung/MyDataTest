import {NativeModules} from 'react-native';
const FedTrackReactModule = NativeModules.FedTrackReactModule;

export default class TestAnalysis {
  public static xhhtest(name: string) {
      console.log(name)
  }
}

