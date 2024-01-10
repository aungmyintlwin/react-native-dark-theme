import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import App from './App';
import store from "./src/redux/store";
import { Provider } from "react-redux";
import './src/i18n/config'

export default function Main() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
          <App/>
    </Provider>
    </SafeAreaProvider>
  );
}
AppRegistry.registerComponent(appName, () => App);
