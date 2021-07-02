
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createCompatNavigatorFactory, createSwitchNavigator } from '@react-navigation/compat';
import WelcomePage from "../page/WelcomePage";
import HomePage from "../page/HomePage";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  Button,
  View,
} from 'react-native';
import DetailPage from "../page/DetailPage";

const StackApp = createStackNavigator()

export default function appNavigators() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName='WelcomePage' headerMode='none'>
        <StackApp.Screen name='WelcomePage' component={WelcomePage} />
        <StackApp.Screen name='HomePage' component={HomePage} />
        <StackApp.Screen name='DetailPage' component={DetailPage}     />
      </StackApp.Navigator>
    </NavigationContainer>

  );
}
