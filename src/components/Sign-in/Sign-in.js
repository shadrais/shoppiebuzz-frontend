import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Sign-in.css'

const Signin = () => {
  return (
    <>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' required />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' required />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>

        <Link to='/register'>
          <Button variant='primary' type='button'>
            Don't have a account?
          </Button>
        </Link>
      </Form>
    </>
  )
}

export default Signin
