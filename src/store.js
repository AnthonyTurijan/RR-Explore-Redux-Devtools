import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/CounterSlice'
import todoReducer from './features/ToDoSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    }
})