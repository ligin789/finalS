/**
 * @format
 */
 import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './app/store/store';
const store = configureStore();
export default class TypeScriptTemplate extends Component {
    render() {
        return (
            //session start
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => TypeScriptTemplate);