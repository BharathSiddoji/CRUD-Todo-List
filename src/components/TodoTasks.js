import React from 'react'
import { useSelector } from 'react-redux';
import './todo.css';
const TodoTasks = (props) => {
    const data = useSelector((state)=>state.todoReducer)
  return (
    <div className='todo__task'>
        {data.map((each)=><div key={each.id} className="task__container">
            <p className="task">{each.payload}</p>
            <button className='delete' >X</button>
            <button className='edit'>Edit</button>
        </div>)}
    </div>
  )
}

export default TodoTasks