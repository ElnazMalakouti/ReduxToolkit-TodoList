import { deleteTodo } from "../../redux/reducers/todoReducer/todoReducer"
import "../TodoCard/index.css"
import {useDispatch} from 'react-redux'

const TodoCard = ({text,id}) => {

    const dispatch = useDispatch()


    return(
        <div className="todoCard-container">
            <div className="todoCard-wrapper">
                <p>{text}</p>
                <button onClick={()=> dispatch(deleteTodo(id))}>delete</button>
            </div>
        </div>
    )
}

export default TodoCard