import './App.css'
import {useDispatch , useSelector} from 'react-redux'
import {addTodo,deleteTodo} from './redux/reducers/todoReducer/todoReducer'
import { useState } from 'react'
import TodoCard from './components/todoCard'

function App() {
  const dispatch = useDispatch()
  const todolist = useSelector((state) => state.todo.todoList)

  const [inputVal , setInputVal] = useState("")

  return (
    <div className="App">
      {console.log(todolist)}
      <input value={inputVal} onChange={e => setInputVal(e.target.value)}/>
      <button onClick={()=> dispatch(addTodo(inputVal))}>add</button>      
      {todolist.map(item => {
        return <TodoCard
        text={item.text}
        id={item.id}
        />
      })}
    </div>
  )
}

export default App