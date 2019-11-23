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

const add = () => {
  store.dispatch(increment());
};
const sub = () => {
  store.dispatch(decrement());
};

const increment = () => {
  return {
    type: 'INCREMENT',
  };
};
const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

const initialState = {
  value: 0,
  log: false,
};
const counterReducer = (state = initialState.value, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
const allReducer = combineReducers({
  counterReducer,
});
export const store = createStore(allReducer);
class App extends React.Component {
  render() {
    return (
      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text>Counter Value: {this.props.counter}</Text>
        <View style={{marginTop: 10}}>
          <Button
            onPress={() => {
              add();
            }}
            title="Increment"
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button
            onPress={() => {
              sub();
            }}
            title="Decrement"
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  counter: state.counterReducer,
  pop: ownProps,
});
export default connect(mapStateToProps)(App);
