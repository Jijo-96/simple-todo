import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    task: "lorem ipsum",
  },
  {
    task: "lorem ipsum",
  },
  {
    task: "lorem ipsum",
  },
  {
    task: "lorem ipsum",
  },
  {
    task: "lorem ipsum",
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.floor(Math.random() * 100000),
        task: action.payload.task,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    }
  },
});

export const { addTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
