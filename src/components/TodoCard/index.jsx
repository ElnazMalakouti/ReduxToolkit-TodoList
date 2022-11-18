import { deleteTodo } from "../../redux/reducers/todoReducer/todoReducer"
import "../TodoCard/index.css"
import {useDispatch} from 'react-redux'

const TodoCard = ({text,id}) => {

    const dispatch = useDispatch()


    return(
        <div className="w-full flex flex-col gap-[1.5rem] items-center justify-center">
            <div className="w-[60%] flex flex-col gap-[1.5rem] pt-2">
                <div className="w-full text-[18px] bg-gray-400 text-black flex flex-row justify-between p-[1rem] rounded-2xl">
                    <p>{text}</p>
                    <button onClick={()=> dispatch(deleteTodo(id))}>delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoCard