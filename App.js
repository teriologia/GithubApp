/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';
import AppContainer from './src/container';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Fragment>
  );
};

export default App;
