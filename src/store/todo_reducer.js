import { ADD_TODO,GET_TODO,
    REMOVETODO } from "./action.type"
import axios from "axios"


export const todoReducer=(state={todos:[]},{type,payload})=>{

    switch(type){
        case ADD_TODO:{
          
            return{...state, 
                todos:[
                ...state.todos,{
                    ...payload,
                    id:state.todos.length+1
                }
            ]}
        }
        case GET_TODO:{
          return {
            ...state,
            todos: payload
          }  
        }
        case REMOVETODO:{
            axios.delete(`http://localhost:8080/todos/${payload.id}`)
           return state
        }
      
        default:{
            return state;
        }
    }

}