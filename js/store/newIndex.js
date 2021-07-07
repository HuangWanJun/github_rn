import { configureStore } from "@reduxjs/toolkit";
import { addTodo } from "./slice/todo";
//import orderReducer from "./slice/order";

export default configureStore({
  reducer: {
    todo: addTodo,
    //order: orderReducer,
  },
});
