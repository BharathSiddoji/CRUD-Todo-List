import {addTask,deleteTask,updateTask} from '../actions/actions';

const initialState = [{id:1,payload:"task 1 is to configure the store"}]

export const todoReducer =(state = initialState,action)=>{
    switch(action.type){
        case addTask:
            return [...state,action.payload]
        case deleteTask:
            return [...action.payload]
        case updateTask:
            return [...action.action]
        default:return state
    }
}