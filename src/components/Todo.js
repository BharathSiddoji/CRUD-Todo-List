import React,{useState} from 'react'
import './todo.css'

const Todo = () => {
    const [task,setTask] = useState([])
    const formHandler =(e)=>{
        e.preventDefault()
        alert(task)
    }
    const inputFieldHandler=(e)=>{
        setTask(e.target.value)
    }
  return (
    <div className='form__container'>
        <h1>TODO LIST</h1>
       <form onSubmit={(e)=>formHandler(e)}>
        <label htmlFor="text" className='form__label'>Enter a Task</label>
        <input type="text" name="text" id="text" className='form__input' onChange={inputFieldHandler}/>
        <input type="submit" value="submit" className='form__btn'/>
       </form>
    </div>
  )
}

export default Todo