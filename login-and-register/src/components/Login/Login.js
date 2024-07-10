import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <>
      <div className='login'>
        <form>
            <h1>Login Form</h1>
            <label>User Name</label>
            <input type='text'/>
            <label>Password</label>
            <input type='password'/>
            <button>Submit</button>
            
        </form>


      </div>
    </>
  )
}

export default Login
