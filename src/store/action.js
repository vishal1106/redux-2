import {COUNTER_INCREMENT,COUNTER_DECREMENT,
    ADD_TODO,COMPLETEDTODO,UPDATEDTODO,
    REMOVETODO,GET_TODO_SUCCESS,
    GET_TODO_ERROR,GET_TODO_LOADING,GET_TODO} from "./action.type"


export  const counterIn=()=>{
    return{type:COUNTER_INCREMENT}}

export const counterDe=()=>{
    return{ type:COUNTER_DECREMENT}}

export const getTodos=(payload)=>({
    type:GET_TODO,payload
}

)
  



export  const todoapp=(payload)=>{
 return{type:ADD_TODO,payload}
}
export const todocompleted=(id)=>{
    return{type:COMPLETEDTODO, payload : id}}
export const updatedtodo=(payload)=>{
    return{type:UPDATEDTODO, payload}}
export const removetodo=(id)=>{
    return{type:REMOVETODO,payload:id}}

    export const getTodo=(payload)=>({
        type:GET_TODO_SUCCESS,payload
    })
    export const getTodolaoding=()=>(
        {type:GET_TODO_LOADING}
    )
    export  const getTodoerror=()=>(
        {
            type:GET_TODO_ERROR
        }
    )