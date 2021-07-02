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
import NavigationUtil from "../Navigator/NavigationUtil";

export default function WelcomePage(props) {
  //componentDidMount
  React.useEffect(() => {
    /* 下面是 componentDidMount*/

    this.timer = setTimeout(() => {
      // jump to homepage
      //navigation.navigate('HomePage');
      NavigationUtil.resetToHomePage(props);
    }, 2000);
    /* 上面是 componentDidMount */
    return () => {
      /* 下面是 componentWillUnmount */
      console.log('clear timer');
      this.timer && clearTimeout(this.timer);
      /* 上面是 componentWillUnmount */
    };
  }, []);

  console.log("this is welcome page");

  return (
    <View style={styles.container}>
      <Text>WelcomePage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
