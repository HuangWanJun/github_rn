import React,{Component} from 'react';
import { Provider } from "react-redux";
import AppNavigator from './Navigator/AppNavigators'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './utils/configureStore'
//import {persistor,store} from './utils/configureStore'
//import store from './store/index'
//import {store} from "./store/newIndex"



export default function App(){

  //exporting a function from configureStore.js but trying to import {persistor, store} in other js
  const {persistor,store} = configureStore();

  /**
   * 4. send Store to App frame
   */

  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <AppNavigator />
    </PersistGate>
  </Provider>
}
