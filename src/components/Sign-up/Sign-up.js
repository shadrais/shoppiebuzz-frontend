import React from 'react'
import { Form} from 'react-bootstrap'
import './Sign-up.css'
const Signup = () => {
  return (
    <>
      <Form>
      <div className='main-body2'>
        <h1>Register</h1>
          <div className='email'>
            <input type='text' id='email' placeholder='Name'></input>
          </div>
          <div className='email'>
            <input type='text' id='email' placeholder='Email Address'></input>
          </div>
        <div className='pass'>
          <input type='password' id='pass' placeholder='Password'></input>
        </div>
        <div className='pass'>
          <input type='password' id='pass' placeholder='Confirm Password'></input>
        </div>
        <div>
        <button className='btn-1'>Submit</button>
        </div>
        </div>
      </Form>
    </>
  )
}

export default Signup
