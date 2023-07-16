import React from 'react'
import Button from "../components/Button"

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <label htmlFor="">Name</label>
      <input type="text" placeholder='Your Name...' />

      <label htmlFor="">Email</label>
      <input type="email" placeholder='Your E-mail...'/>

      <label htmlFor="">Message</label>
      <textarea name="" id="" cols="30" rows="10" placeholder='Your Message...'></textarea>
      <button>Send</button>
    </div>
  )
}

export default Contact