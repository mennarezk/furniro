import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/home');
    }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <div className="form_group">
            <label>Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-btnn" onClick={handleHomeClick}>Login</button>
        </form>
        <div className="login-footer">
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
      </div>
    </div>
  );
}
