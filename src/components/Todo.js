import React,{useRef} from 'react'
import './todo.css'
import { useDispatch, useSelector } from 'react-redux'
import { add_Todo,delete_Todo,update_Todo } from './redux/actions/actions'
import {BsPencilSquare} from 'react-icons/bs'


const Todo = () => {
    const actionDispatch = useDispatch()
    
    const tasks = useSelector((state)=>state.todoReducer)
    
    let valueOfInput = useRef()
    
    const deleteDispatch = useDispatch()
    
    const delteHandler =(itemId)=>{
      const filtered = tasks.filter((each)=>itemId !==each.id)
      deleteDispatch(delete_Todo(filtered))
    }
    
    const formHandler =(e)=>{
      e.preventDefault()
      const date = new Date()
      const data = {
          id:date.getTime(),
          payload:valueOfInput.current.value
      }
      
      valueOfInput.current.value =''
      actionDispatch(add_Todo(data))
  }
  const editHandler = (itemId)=>{
    let filteredItems = tasks.filter((each)=>{
      if(itemId === each.id){
        valueOfInput.current.value = each.payload;
      }
      return each.id !== itemId
    })
    actionDispatch(update_Todo(filteredItems))
  }
    
  return (
    <div className='form'>
        <h1>TODO LIST</h1>
       <form onSubmit={(e)=>formHandler(e)} className="form__container">
        <label htmlFor="text" className='form__label'>Enter a Task</label>
        <input type="text" name="text" id="text" className='form__input'  ref={valueOfInput} required/>
        <input type="submit" value="submit" className='form__btn'/>
       </form>
      <div className='todo__task'>
        {tasks.map((each)=><div key={each.id} className="task__container">
            <p className="task">{each.payload}</p>
            <div className="btn__container">
            <button className='delete btn' onClick={()=>{delteHandler(each.id)}} >X</button>
            <button className='edit btn' onClick={()=>editHandler(each.id)}><BsPencilSquare /></button>
            </div>
        </div>)}
    </div>
    </div>
  )
}

export default Todo