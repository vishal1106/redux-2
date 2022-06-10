import {ADD_TODO,COMPLETEDTODO,
    UPDATEDTODO,REMOVETODO,GET_TODO_SUCCESS, 
    GET_TODO_ERROR, GET_TODO_LOADING,GET_TODO} from "./action.type"


export const todo_reducer=(state={todos:[]},{type,payload})=>{
   
console.log(payload)
    switch(type){
        
        case ADD_TODO:{
            
            return {...state,
            todos:[
                ...state.todos,{
                    ...payload,
                    id:state.todos.length,
                },
            ]
        }
        
        }

        case GET_TODO:{
          
            return{...state,
            todos:payload}
        }
   

        case GET_TODO_SUCCESS:{

            return{...state,
            todos:payload}
        }
        case GET_TODO_ERROR:{

            return{...state}
        }
        case GET_TODO_LOADING:{

            return{...state}
        }

    
        case COMPLETEDTODO:{
            return {...state}
        }
        case UPDATEDTODO:{
            return {...state}
        }
        case REMOVETODO:{
            return {...state,
            todos:[
                ...state.todos.splice(payload,1)
     ]
            }
        }
        default:{
            return state;
        }
    }
    
}