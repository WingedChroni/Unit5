import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact-container'>
        <h2>Contact Us</h2>
        <form>
          {/* <label htmlFor="firstName">First Name</label> */}
          <input type="text" id="firstName" placeholder='First Name' />

          {/* <label htmlFor="lastName">Last Name</label> */}
          <input type="lastName" id="lastName" placeholder="Last Name" />

          {/* <label htmlFor="message">Message</label> */}
          <textarea id="message" rows="4" placeholder='Write your message here'></textarea>
          <button type="submit">Submit</button>
        </form>
        
    </div>
  )
}

export default Contact