import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../features/post/postSlice'
import todoReducer from '../features/todo/todoSlice'

export default configureStore({
  reducer: {
    post: postReducer,
    todo: todoReducer,
  },
})