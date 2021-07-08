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
import UserPage from "../components/UserPage";

export default function MyPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>My Page</Text>
      <UserPage></UserPage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome:{
    fontSize:20,
    textAlign:'center',
    margin:10,
  },
});
