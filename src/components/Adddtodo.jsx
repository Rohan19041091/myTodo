import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../feature/todo/todoSlice'
const Adddtodo = () => {

    const [input,setInput]=useState('')
    const dispatch=useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
   <form onSubmit={addTodoHandler} className='form'>
    <input type ="text" className='input'
    placeholder='Enter a todo..'
    value={input}
    onChange={(e)=>setInput(e.target.value)}/>
    <button type='submit' className='btn'>+</button > 
   
   </form>
  )
}

export default Adddtodo