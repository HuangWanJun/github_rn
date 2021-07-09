import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/Todolist";
import { addTodo, decrement, increment,incrementByAmount } from "../store/slice/sliceCounter";
import {DeviceStorage} from '../utils/DeviceStorage'

function TredndingPage(props) {

  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch();
  const [param,setParam] = useState('0')

  const setNewParams = async ()=>{
    console.log(`local value ${param}`)
    let egg = await DeviceStorage.getStringData('@egg')

    console.log( `old value ${egg}`);
    egg = `${egg} 1223`
    await DeviceStorage.storeStringData('@egg',egg)

    egg = await DeviceStorage.getStringData('@egg')
    await setParam(egg)
    console.log(`new value ${param}`)
  }

  useEffect(()=>{
    //setNewParams();

  })

  useEffect(()=>{
    DeviceStorage.removeValue('@egg')

  },[])

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
