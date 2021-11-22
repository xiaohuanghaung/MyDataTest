import {NativeModules} from 'react-native';
const AnalysisBridge = NativeModules.AnalysisReactModule;

export default class CommonNativeBridge {
  /**
   * Page
   * @param evventName 事件名称
   * @param event 事件
   * @param page 页
   */
  public static sentAnalysisPage(evventName: string, event: string, page:string) {
    AnalysisBridge.sentAnalysisPage(evventName, event, page);
  }

  /**
   * Event
   * @param evventName 事件名称
   * @param event 事件
   */
   public static sentAnalysisEvent(evventName: string, event: string) {
    AnalysisBridge.sentAnalysisPage(evventName, event);
  }
}
