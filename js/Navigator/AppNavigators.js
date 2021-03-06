
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

//NavigationContainer
//https://hybridheroes.de/blog/2021-02-05-react-navigation-v5/

export default function appNavigators() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName='WelcomePage' headerMode='float'>
        <StackApp.Screen name='WelcomePage' component={WelcomePage} />
        <StackApp.Screen name='HomePage' component={HomePage} options={{headerShown:false}} />
        <StackApp.Screen name='DetailPage' component={DetailPage}    />
      </StackApp.Navigator>
    </NavigationContainer>

  );
}
