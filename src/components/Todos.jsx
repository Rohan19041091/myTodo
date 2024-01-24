import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {removetodo} from '../feature/todo/todoSlice'

const Todos = () => {
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()

  return (
    <>
    <div className='head'>
        <h2>Todos</h2>
        </div>
        <div className='list'>
        {todos.map((todo)=>(
            <li key ={todo.id}>
                   {todo.text}
                   <button className='btn'
                   onClick={()=>dispatch(removetodo(todo.id))}
                   >X</button>
            </li>
         
        ))}
        </div>
        </>
  )
}

export default Todos