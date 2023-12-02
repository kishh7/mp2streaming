import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        birthday: ''
      });
    
      const [errors, setErrors] = useState({
        nameErr: '',
        emailErr: '',
        passwordErr: '',
        birthdayErr: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const validateForm = () => {
        let { name, email, password, birthday } = formData;
        let nameErr = '',
          emailErr = '',
          passwordErr = '',
          birthdayErr = '';
    
        if (name.trim() === '') {
          nameErr = 'Please enter your name';
        } else {
          const regex = /^[a-zA-Z\s]+$/;
          if (!regex.test(name)) {
            nameErr = 'Please enter a valid name';
          }
        }
    
        if (email.trim() === '') {
          emailErr = 'Please enter your email address';
        } else {
          const regex = /^\S+@\S+\.\S+$/;
          if (!regex.test(email)) {
            emailErr = 'Please enter a valid email address (@gmail.com)';
          }
        }
    
        if (password.trim() === '') {
          passwordErr = 'Please enter your password';
        } else {
          if (password.length < 6) {
            passwordErr = 'Please enter at least 6 characters';
          }
        }
    
        if (birthday.trim() === '') {
          birthdayErr = 'Please select your birthday';
        }
    
        setErrors({
          nameErr,
          emailErr,
          passwordErr,
          birthdayErr
        });
    
        return !(nameErr || emailErr || passwordErr || birthdayErr);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
          
          console.log('Form submitted:', formData);
        }
      };
    return (
        <div className="container-Signup">
        <div className="form-container">
        <form className="formSignup" onSubmit={handleSubmit}>
        <h2 className="h2reg">Registration Form</h2>
        <div className="box">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.nameErr ? 'input-2' : 'input-1'}
          />
          <div className="error" id="nameErr">
            {errors.nameErr}
          </div>
        </div>
  
        <div className="box">
          <label>Email Address</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.emailErr ? 'input-2' : 'input-1'}
          />
          <div className="error" id="emailErr">
            {errors.emailErr}
          </div>
        </div>
  
        <div className="box">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.passwordErr ? 'input-2' : 'input-1'}
          />
          <div className="error" id="passwordErr">
            {errors.passwordErr}
          </div>
        </div>
  
        <div className="box">
          <label>Birthday</label>
          <input
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            className={errors.birthdayErr ? 'input-2' : 'input-1'}
          />
          <div className="error" id="birthdayErr">
            {errors.birthdayErr}
          </div>
        </div>
        <button className="Sumbitto">Signup</button>
        
        <div className="link-container">
      <Link to="/RegistrationForm">Login</Link>
    </div>
      </form>
        </div>
        </div>
    );
  };

export default Signup