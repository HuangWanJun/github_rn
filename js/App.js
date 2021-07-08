import React,{Component} from 'react';
import { Provider } from "react-redux";
import AppNavigator from './Navigator/AppNavigators'
//import store from './store/index'
import {store} from "./store/newIndex"

export default function App(){
  /**
   * 4. send Store to App frame
   */

 // console.log(store.getState().users)

  return <Provider store={store}>
     <AppNavigator />
  </Provider>
}
