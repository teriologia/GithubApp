/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Router from './src/router';
 class App extends Component{
   render(){
     return(
      <Provider store={store}>
        <Router />
      </Provider>
     )
   }
 }
export default App