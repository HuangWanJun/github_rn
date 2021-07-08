import React, { useState } from "react";
import type {Node} from 'react';
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
import { connect, useDispatch, useSelector } from "react-redux";
import TodoList from "../components/Todolist";
import { addTodo, decrement, increment,incrementByAmount } from "../store/slice/sliceCounter";


function TredndingPage(props) {

  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch();


  return (
    <View style={styles.container}>
      {/*<TodoList />*/}
      <Text>The count is:{count}</Text>
      <Button title={"increment"} onPress={()=>dispatch(increment())} ></Button>
      <Button title={"decrement"} onPress={()=>dispatch(decrement())} ></Button>
      <Button title={"incrementByAmount"} onPress={()=>dispatch(incrementByAmount(33))} ></Button>
    </View>
  );
}

// const mapStateToProps = state => ({
//   count:state.countIndex.count
// });
//export default connect(mapStateToProps)(TredndingPage);

export default TredndingPage;

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
