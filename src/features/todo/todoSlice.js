import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = [...state.value, action.payload];
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter(item => item.index !== action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer