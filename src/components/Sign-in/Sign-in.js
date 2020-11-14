import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Sign-in.css'
const Signin = () => {
  return (
    <>
      <Form>
        <div className='main-body'>
          <h2>LOGIN</h2>
          <div className='email'>
            <input type='text' id='email' placeholder='Email Address'></input>
          </div>

          <div className='pass'>
            <input type='password' id='pass' placeholder='Password'></input>
          </div>

          <div>
            <button className='btn-1'>Submit</button>
          </div>

          <Link to='/register'>
            <button className='btn-2'>Don't have an account?</button>
          </Link>
        </div>
      </Form>
    </>
  )
}

export default Signin
