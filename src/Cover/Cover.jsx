import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Cover.css'
export default function Cover() {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('login');
    }
    const handleRegisterClick = () => {
      navigate('register');
  }
  return (
    
    <div className="landing-container">
         <div className="button-container">
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
          <button className="register-btn" onClick={handleRegisterClick}>Register</button>
        </div>
    <div className="content-container">
      <div className="text-cont">
        <h1 className="Title">FURNITURE</h1>
        <h2 className="subtitle">Landing Page</h2>
        <p className="description">
          The e-Commerce Website design is easy to customize, making it even easier for you to design your next website or project, and speed up your design workflow.
        </p>
      </div>
      <div className="logo-container">
        <img src="src/assets/Rectangle 80.png" alt="Logo" className="logoo" />
      </div>
    </div>
  </div>
);
};


