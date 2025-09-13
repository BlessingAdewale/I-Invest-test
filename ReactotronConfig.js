import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

let reactotron = undefined;

// eslint-disable-next-line no-undef
if (__DEV__) {
  reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      name: 'parthian',
    })
    .useReactNative({
      asyncStorage: true, // enabled reactotron async storage, more context https://docs.infinite.red/reactotron/plugins/async-storage/
      networking: {
        // enabled reactotron network, more context https://docs.infinite.red/reactotron/plugins/networking/
        ignoreUrls: /symbolicate/,
      },
      editor: true, // enabled reactotron editor, more context https://docs.infinite.red/reactotron/plugins/open-in-editor/
      errors: true, // enabled reactotron errors, more context https://docs.infinite.red/reactotron/plugins/track-global-errors/
      log: true, // enabled reactotron logs, more context https://docs.infinite.red/reactotron/plugins/track-global-logs/
      overlay: true, // enabled reactotron image overlay, more context https://docs.infinite.red/reactotron/plugins/overlay/
    })
    .use(reactotronRedux()) // enabled reactotron-redux, more context https://docs.infinite.red/reactotron/plugins/redux/
    .connect();

  // eslint-disable-next-line no-undef
  if (__DEV__) {
    Reactotron?.clear();
  }
}

export default reactotron;
