import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo, Filter, Status } from "../types";
import { RootState } from "./store";

interface TodoListState {
  list: Todo[];
  filter: Filter;
  isLoading: boolean;
  error: string;
}

const initialState: TodoListState = {
  list: [],
  isLoading: true,
  filter: Filter.ALL,
  error: "",
};

export const fetchTodos = createAsyncThunk<
  Todo[],
  Filter,
  { rejectValue: string; fulfilledMeta: null }
>("todoList", async (filter, { fulfillWithValue, rejectWithValue }) => {
  try {
    const { data } = await axios.get<Todo[]>(`/todos`);
    return fulfillWithValue(data, null);
  } catch (error) {
    return rejectWithValue("Something went wrong");
  }
});

const changeStatus = createAsyncThunk("changeStatus", async () => {});

const removeTodo = createAsyncThunk("removeTodo", async () => {});

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload as Todo[];
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// selectors
export const selectFilter = (state: RootState): Filter => state.todoList.filter;

export const selectTodoList = (state: RootState): Todo[] => state.todoList.list;

//   export const selectFilteredTodoList = (state: RootState): Todo[] =>
//   state.todoList.list;

// Action creators are generated for each case reducer function
export const { setFilter } = todoListSlice.actions;

export default todoListSlice.reducer;
