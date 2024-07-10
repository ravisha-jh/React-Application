import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <>
      <div className='register'>
        <form>
            <h1>Registration Form</h1>
            <label>Name</label>
            <input type='text'/>
            <label>Email</label>
            <input type='password'/>
            <label>Address</label>
            <input type='text'/>
            <label>Date of Birth</label>
            <input type='date' id='dob'/>
            <label>Phone Number</label>
            <input type='text'/>
            <label>Password</label>
            <input type='password'/>
            <button>Register</button>
            
        </form>


      </div>
    </>
  )
}

export default Register
