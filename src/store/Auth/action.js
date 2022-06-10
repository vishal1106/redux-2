import {signIn} from "./action.type"


export const loginapp=(value)=>{
    return{
        type:signIn,
        payload:value,
    }
}

