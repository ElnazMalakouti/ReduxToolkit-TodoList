import { createSlice } from "@reduxjs/toolkit";

const init = {
    todoList : []
}

const todoReducer = createSlice({
    name : 'todoReducer',
    initialState : init,
    reducers : {
        addTodo : (state,action) => {
            state.todoList.push(action.payload)
        },
        deleteTodo : (state,action) => {
            state.todoList = state.todoList.filter(item => item.id !== action.payload)
        }
    }
})

export const {addTodo,deleteTodo} = todoReducer.actions
export default todoReducer.reducer