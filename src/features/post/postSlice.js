import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.value === 100) {
        return;
      }

      state.value += 1
    },
    decrement: (state) => {
      if (state.value === 1) {
        return;
      }

      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      if (action.payload < 1 || action.payload > 100) {
        return;
      }

      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = postSlice.actions

export default postSlice.reducer