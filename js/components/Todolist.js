import React from "react";
import { useSelector } from "react-redux";
import { selectTodo } from "../store/slice/sliceCounter";
import { Text,View } from "react-native";
const TodoList = () => {
  const states = useSelector(selectTodo); // <-- 拿取資料

  return (
    <View>
      {states.todolist.map((i) => (
        <Text>{i.key} {i.name}</Text>
      ))}
    </View>
  );
};

export default TodoList;
