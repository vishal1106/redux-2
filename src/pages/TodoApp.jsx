import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {todoapp,getTodos} from "../store/action"
import axios from "axios"
const TodoApp = () => {
    const ref=useRef();
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todo.todos);
  
   const addnew =()=>{
      let value=ref.current.value;
      
      dispatch(
        todoapp({
                iscompletes:false,
                value:value,
          })
      )
  }
  // useEffect(()=>{
  //   axios.get(" http://localhost:8080/todos")
  //   .then((r)=>{
  //       dispatch(getTodos(r.data));
      
  //   });
  // },[]);

  
  
  
  
  
    return (
    <div>TodoApp
      <div>
      <input ref={ref} type="text" placeholder='type here.....' />
        <button onClick={addnew}>Add</button>
      </div>
      <br />
      <br />
   
       {/* {todos.map((el)=>{
       return <div key={el.id}> {el.value} </div>
       })} */}
    </div>
  )
}

export default TodoApp