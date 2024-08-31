import React, { useState } from 'react';
import Footer_Two from '../Footer_Two/Footer_Two'
import { useNavigate } from 'react-router-dom';
import './Contact.css'

import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  // const navigate = useNavigate();
 const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, subject, message });
  };

  return (
    <div>
 <div className="cover_contact">
 <img src="src\assets\2.jpg" alt="" />
 <h1>Contact</h1>
  </div>

   <div className="touch">
    <h2>Get In Touch With Us</h2>
    <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
       Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
  </div>
  
  <div className="containerContct">
      <div className="contact-info">
        <h2>
          <FaMapMarkerAlt className="iconn" />
          Address
        </h2>
        <p>236 5th SE Avenue, New York NY10000, United States</p>
        <br />
        <br />
        <h2>
          <FaPhoneAlt className="iconn" />
          Phone
        </h2>
        <p>Mobile: +(84) 546-6789</p>
        <p>Hotline: +(84) 456-6789</p>
        <br />
        <br />
        <h2>
          <FaClock className="iconn" />
          Working Time
        </h2>

        <p>Monday-Friday: 9:00 - 22:00</p>
        <p>Saturday-Sunday: 9:00 - 21:00</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label >Your name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label >Message:</label>
          <textarea className='textarea'
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            // required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div> 





      <Footer_Two/>
   </div>
  )
}
