import {addTask,deleteTask,updateTask} from '../actions/actions';

const initialState = []

export const todoReducer =(state = initialState,action)=>{
    switch(action.type){
        case addTask:
            return [...state,action.payload]
        case deleteTask:
            return [...action.payload]
        case updateTask:
            return [...action.payload]
        default:return state
    }
}