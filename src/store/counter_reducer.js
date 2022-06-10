import {COUNTER_INCREMENT,COUNTER_DECREMENT} from "./action.type"


export const counter_reducer=(state={count:0},{type})=>{
    switch(type){
        case COUNTER_INCREMENT:{
         
            state.count++;
            return {...state}
        }
        case COUNTER_DECREMENT:{
              state.count--;
            return {...state}
        }
        default:{
            return  state;
        }
    }

}