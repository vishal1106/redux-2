import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {todoapp,getTodos,removetodo} from "../store/action"
import axios from "axios"
const TodoApp = () => {
    const ref=useRef();
    const dispatch=useDispatch();
   const todos=useSelector((state)=>state.todo.todos)

  const clickhandler=()=>{
    let value=ref.current.value
    
    dispatch(todoapp({
     
      value:value,
      iscompleted:false,
    }))
  }
  
  useEffect(()=>{
    axios.get(" http://localhost:8080/todos").then((r)=>{
    dispatch(getTodos(r.data))
    })


  },[])
  
  
  const remove=(el)=>{
  dispatch(removetodo(el))
  }
  
    return (
    <div>TodoApp
      <div>
      <input ref={ref} type="text" placeholder='type here.....' />
        <button onClick={clickhandler} >Add</button>
      </div>
      <br />
      <br />
     
       {todos.map((el)=>{
       return <div key={el.id}> {el.value} 
      <button onClick={()=>remove(el)}>Remove</button></div>
       })}
    </div>
  )
}

export default TodoApp