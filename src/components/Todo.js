import React,{useRef} from 'react'
import './todo.css'
import { useDispatch } from 'react-redux'
import { add_Todo } from './redux/actions/actions'
const Todo = () => {
    const actionDispatch = useDispatch()
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
        <input type="text" name="text" id="text" className='form__input'  ref={valueOfInput} />
        <input type="submit" value="submit" className='form__btn'/>
       </form>
    </div>
  )
}

export default Todo