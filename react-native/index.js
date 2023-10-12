import React from "react";
import { App } from "./src/App";
import {AppRegistry, Platform} from 'react-native';

const Root = () => {
  return (
    <App />
  )
}

AppRegistry.registerComponent('App', () => Root);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('App', {
    rootTag: document.getElementById('root')
  });
}
