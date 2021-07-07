import React from 'react';
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
import { connect, useDispatch } from "react-redux";
import TodoList from "../components/Todolist";
import {addTodo} from "../store/slice/todo";


function TredndingPage({props}) {

  const dispatch = useDispatch();
  const handleAddToDo = () => {
    dispatch(addTodo("A new to Item"))
  }

  return (
    <View style={styles.container}>
      <TodoList />
      <Button title={"new Item"} onPress={handleAddToDo} ></Button>
      <Text style={styles.welcome}>Trednding Page</Text>
    </View>
  );
}

const mapStateToProps = state => ({
  theme:state.theme,
});

export default connect(mapStateToProps)(TredndingPage);

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
