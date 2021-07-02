import React from 'react';
import type {Node} from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import NavigationUtil from "../Navigator/NavigationUtil";

const Tab = createMaterialTopTabNavigator();

function PopularScreen() {
  return (
    <View style={styles.container}>
        <Text>fdsf</Text>
      <Button title={'jump to detail page'} onPress={()=>{
        NavigationUtil.goPage({},'DetailPage');
      }
      } />
    </View>
  );
}

export default function PopularPage(){
  return (
    <View style={styles.container}>
    <Tab.Navigator initialRouteName={"PopularScreen2"} tabBarOptions={{ activeTintColor: '#e91e63', labelStyle: { fontSize: 20 }, style: { backgroundColor: 'powderblue' } }}>
      <Tab.Screen name={'PopularScreen2'} component={PopularScreen}  options={{
        title:"Tab1",
      }}/>
      <Tab.Screen name={'PopularScreen1'} component={PopularScreen} options={{
        title:"Tab2",
      }}/>
    </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
  },
  welcome:{
    fontSize:20,
    textAlign:'center',
    margin:10,
  },
});
