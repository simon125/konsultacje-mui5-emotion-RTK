import { createSlice } from "@reduxjs/toolkit";
import { Todo, Status } from "../types";
import { RootState } from "./store";

export interface TodoAddState {
  todoForm: Todo;
}

const initialState: TodoAddState = {
  todoForm: {
    id: "",
    name: "",
    status: Status.TODO,
  },
};

export const todoAddSlice = createSlice({
  name: "todoAdd",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.todoForm.name = action.payload;
    },
    setStatus: (state, action) => {
      state.todoForm.status = action.payload;
    },
    resetForm: (state) => {
      state.todoForm.name = "";
      state.todoForm.status = Status.TODO;
    },
  },
});

// selectors
export const selectStatus = (state: RootState): Status =>
  state.todoAdd.todoForm.status;

export const selectName = (state: RootState): string =>
  state.todoAdd.todoForm.name;

// Action creators are generated for each case reducer function
export const { setName, setStatus, resetForm } = todoAddSlice.actions;

export default todoAddSlice.reducer;
