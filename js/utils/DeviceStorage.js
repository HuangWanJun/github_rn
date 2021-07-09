import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";

export class DeviceStorage {

  /**
   * Storing string value
   * @param value
   * @returns {Promise<void>}
   */
  static storeStringData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.log(`storeStringData key:${key} value ${value} error: ${e.toString()}`);
    }
  }

  /**
   * Storing object value
   * @param value
   * @returns {Promise<void>}
   */
  static storeObjectData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      console.log(`storeObjectData key:${key} value ${value} error: ${e.toString()}`);
    }
  }

  /**
   * Reading string value
   * @param key
   * @returns {Promise<void>}
   */
  static getStringData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
       return value;
      }
    } catch(e) {
      console.log(`getStringData key:${key} error:${e.toString()}`);
    }
  }

  /**
   * Reading object value
   * @param key
   * @returns {Promise<any|null>}
   */
  static getObjectData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log(`getObjectData key:${key} error:${e.toString()}`);
    }
  }

  /**
   * removeValue
   * @param key
   * @returns {Promise<void>}
   */
  static removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      console.log(e.toString());
    }
    console.log('removeValue Done.')
  }


}






