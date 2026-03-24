import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='contact-us-container'>
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Any questions or feedback? We'd love to hear from you!</p>
      </div>
      
      <div className="contact-main">
        <div className="contact-details">
          <h3>Contact Information</h3>
          <p>Fill out the form and our team will get back to you within 24 hours.</p>
          <div className="info-item">
            <span>📞 +1-212-456-7890</span>
          </div>
          <div className="info-item">
            <span>✉️ support@quickbite.com</span>
          </div>
          <div className="info-item">
            <span>📍 102 Street, New Delhi, India</span>
          </div>
        </div>

        <form className="contact-form">
          <div className="input-group">
             <label>Your Name</label>
             <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-group">
             <label>Email Address</label>
             <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
             <label>Your Message</label>
             <textarea placeholder="How can we help you?" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs