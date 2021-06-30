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

export default function WelcomePage() {
  //componentDidMount
  React.useEffect(() => {
    /* 下面是 componentDidMount*/

    this.timer = setTimeout(() => {
      // jump to homepage
    }, 2000);
    /* 上面是 componentDidMount */
    return () => {
      /* 下面是 componentWillUnmount */
      this.timer && clearTimeout(this.timer);
      /* 上面是 componentWillUnmount */
    };
  }, []);



  return (
    <View style={styles.container}>
      <Text>WelcomePage</Text>
    </View>
  );
}

let styles: { container: { alignItems: string, flex: number, justifyContent: string } };
styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
