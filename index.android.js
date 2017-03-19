/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './app/reducers';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__})

const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  )
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

class newReduxApp extends Component {
  render() {
    return (
      <View>
        <Text>cool</Text>
      </View>
    );
  }
}


const App = () => {
  <Provider store={store}>
    <newReduxApp />
  </Provider>
}

AppRegistry.registerComponent('newReduxApp', () => App);
