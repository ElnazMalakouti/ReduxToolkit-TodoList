import './App.css'
import {useDispatch , useSelector} from 'react-redux'
import {addTodo,deleteTodo} from './redux/reducers/todoReducer/todoReducer'
import { useState } from 'react'

function App() {
  const dispatch = useDispatch()
  const todolist = useSelector((state) => state.todo.todolist)

  const [inputVal , setInputVal] = useState("")

  return (
    <div className="App">
      <input value={inputVal} onChange={e => setInputVal(e.target.value)}/>
      <button onClick={()=> dispatch(addTodo(inputVal))}>add</button>
    </div>
  )
}

export default App