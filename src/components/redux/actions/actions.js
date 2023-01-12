export const addTask = 'ADD_TASK'
export const deleteTask = 'DELETE_TASK'
export const updateTask = 'UPDATE_TASK'

export const add_Todo=(data)=>{
    return {
        type:addTask,
        payload:data
    }
}


export const delete_Todo =(data)=>{
    return{
        type:deleteTask,
        payload:data
    }
}

export const update_Todo=(data)=>{
    return{
        type:updateTask,
        payload:data
    }
}

