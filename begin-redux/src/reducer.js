
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

export const addTodoReducer = (state = [], action) => {
  switch (action.type) {
    case addTodo.type:
      return [{ text: action.text }, ...state];
    case deleteTodo.type:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
