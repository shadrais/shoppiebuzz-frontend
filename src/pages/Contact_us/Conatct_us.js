import React from 'react'
import './Contact_us.css'

const Contact = () => {
  return (
    <div>
      <div class='contact-section'>
        <h1>Contact Us</h1>
        <div class='border'></div>
        <form className='contact-form' action='index.html' method='post'>
          <input
            type='text'
            className='contact-form-text'
            placeholder='Your name'
          />
          <input
            type='email'
            className='contact-form-text'
            placeholder='Your email'
          />
          <input
            type='text'
            className='contact-form-text'
            placeholder='Your phone'
          />
          <textarea
            className='contact-form-text'
            placeholder='Your message'></textarea>
          <input type='submit' className='contact-form-btn' value='Send' />
        </form>
      </div>
    </div>
  )
}

export default Contact
