import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:"flex", gap:"20px", justifyContent:"space-around"}}>
        <Link to="/"> CounterApp</Link>
        <Link to="/todoapp">TodoApp</Link>
        <Link to= '/login'>Login</Link>
    </div>
  )
}

export default Navbar