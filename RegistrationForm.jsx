import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import './RegistrationForm.css';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault(); 
    if (email === 'kish@gmail.com' && password === 'password') {
      navigate('/');
    } else {
      setError('Invalid credentials. Please try again.'); 
     
    }
  };

  return (
    <div className="container-login">
      <div className="form-container">
        <h2>Login Form</h2>
        {error && <div className="error-message">{error}</div>} 
        <form onSubmit={handleLogin}>
          <div className="form-group"> 
            <label htmlFor='email'>Email</label> 
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
          </div>

          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="link-container">
          <Link to="/Signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
