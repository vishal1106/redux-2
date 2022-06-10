import React from 'react'

const Login = () => {
  return (
    <div>
        <form    style={{display:"flex" ,flexDirection:"column",gap:"20px",width:"300px" ,margin:"auto", marginTop:"60px"}}>
            <input type="text" placeholder='Enter the Email' />
           
            <input type="text" placeholder='Enter the Password' />
          
          <button>Login</button>
        </form>

    </div>
  )
}

export default Login