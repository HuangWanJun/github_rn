import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PopularPage from "./PopularPage"
import TredndingPage from "./TredndingPage"
import MyPage from "./MyPage"
import NavigationUtil from "../Navigator/NavigationUtil";

const Tab = createBottomTabNavigator();

export default function HomePage(props) {

  NavigationUtil.navigation = props.navigation;
  return (
     <Tab.Navigator initialRouteName="PopularPage" tabBarOptions={{ activeTintColor: '#e91e63' }}>
        <Tab.Screen name="PopularPage" component={PopularPage} options={{
          tabBarLabel: "hot",
          tabBarIcon: ({ color, size }) =>
            <MaterialIcons name='whatshot' size={26} style={{ color: color }} />
        }} />


       <Tab.Screen name="TredndingPage" component={TredndingPage} options={{
         tabBarLabel: "save",
         tabBarIcon: ({ color, size }) =>
           <MaterialIcons name='whatshot' size={26} style={{ color: color }} />
       }} />
       <Tab.Screen name="MyPage" component={MyPage} options={{
         tabBarLabel: "save",
         tabBarIcon: ({ color, size }) =>
           <MaterialIcons name='whatshot' size={26} style={{ color: color }} />
       }} />
     </Tab.Navigator>
  );
}


