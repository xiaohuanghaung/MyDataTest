import react from 'react'
import { NativeModules } from 'react-native';
const FedTrackReactModule = NativeModules.FedTrackReactModule;

export default class TestAnalysis {
  /**
   * Page
   * @param evventName 事件名称
   * @param event 事件
   * @param page 页
   */
   public static sentAnalysisPage(evventName: string, data: string, eventEx: string, pageEx:string) {
    FedTrackReactModule.sentAnalysisPage(evventName, data, eventEx, pageEx);
  }

  /**
   * Event
   * @param evventName 事件名称
   * @param event 事件
   */
   public static sentAnalysisEvent(evventName: string, data: string, eventEx: string, pageEx:string) {
    FedTrackReactModule.sentAnalysisEvent(evventName, data, eventEx, pageEx);
  }


  /**
   * Event
   * @param pageName 页面名称
   */
   public static sentPageCreat(pageName: string) {
    FedTrackReactModule.sentPageCreat(pageName);
  }
}

