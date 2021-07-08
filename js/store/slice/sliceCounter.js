import { createSlice } from "@reduxjs/toolkit";



export const silceCounter = createSlice({
  name: "counter",
  initialState: {
    count:0,
    todolist: [
      { id: 1, name: "first todo on redux" },
      { id: 2, name: "second todo in list" },
    ],
  },
  reducers: {
    increment:(state)=>{
      state.count += 1;
    },
    decrement:(state) => {
      state.count -= 1;
    },
    incrementByAmount:(state,action)=>{
      state.count += action.payload;
    },
    addTodo: (state, action) => {
      state.todolist.push(action.payload);
    },
  },
});

export default silceCounter.reducer;
export const { addTodo ,increment,decrement,incrementByAmount} = silceCounter.actions;
