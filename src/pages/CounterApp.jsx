import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {counterIn,counterDe} from "../store/action"

const CounterApp = () => {
    
const dispatch=useDispatch()
const count=useSelector((state)=>state.counter.count)
  return (
    <div><h1>CounterApp:{count}</h1>
    

    <div>
        <button onClick={()=> dispatch(counterIn())}>+</button>
        <button onClick={()=> dispatch(counterDe())}>-</button>
    </div>
    </div>
  )
}

export default CounterApp