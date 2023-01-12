import React,{useRef} from 'react'
import './todo.css'
import { useDispatch, useSelector } from 'react-redux'
import { add_Todo } from './redux/actions/actions'
import TodoTasks from './TodoTasks';


const Todo = () => {
    const actionDispatch = useDispatch()
    const tasks = useSelector((state)=>state.todoReducer)
    let valueOfInput = useRef()
    
    
    
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
    
  return (
    <div className='form__container'>
        <h1>TODO LIST</h1>
       <form onSubmit={(e)=>formHandler(e)}>
        <label htmlFor="text" className='form__label'>Enter a Task</label>
        <input type="text" name="text" id="text" className='form__input'  ref={valueOfInput} required/>
        <input type="submit" value="submit" className='form__btn'/>
       </form>

      {tasks.length <=0 ? null:<TodoTasks />}
     
    </div>
  )
}

export default Todo