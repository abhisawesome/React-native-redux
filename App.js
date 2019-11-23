/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';
import CounterAction, {store} from './App2';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CounterAction />
      </Provider>
    );
  }
}
