
import { signIn } from "./action.type"
const initialState={
    user:[],
    auth:false
}

export const authreducer=(state=initialState,{type})=>{
    switch(type){
       case signIn:{
           return{
               ...state, user:[
                   ...state.user, {auth:true}
               ]

           }
              
           
       }
       default :{
           return state
       }
    }

}