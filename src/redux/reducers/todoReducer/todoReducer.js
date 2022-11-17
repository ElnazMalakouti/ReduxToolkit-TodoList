import { createSlice } from "@reduxjs/toolkit";

const init = {
    todoList : []
}

const todoReducer = createSlice({
    name : 'todoReducer',
    initialState : init,
    reducers : {
        addTodo : (state,action) => {
            const newTodo = {
                text : action.payload,
                id : Date.now().toString(36)
            }
            state.todoList.push(newTodo)
        },
        deleteTodo : (state,action) => {
            console.log(action)
            state.todoList = state.todoList.filter(item => item.id !== action.payload)
        }
    }
})

export const {addTodo,deleteTodo} = todoReducer.actions
export default todoReducer.reducer