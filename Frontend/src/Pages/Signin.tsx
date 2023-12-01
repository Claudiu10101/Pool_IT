import React, { useState } from 'react';
import './CSS/form.css'
import Footer from '../components/Footer'
import crypto from 'crypto-js'

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirm] = useState('');

  const [errorMessage, setError] = useState(" ");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
  }

  const handleSubmit = (arg0: boolean) => {
    const date = new Date();

    let errors = 0;

    let email_check = new RegExp("[a-zA-Z0-9._]+@gmail.com");

    if (username) {
      console.log('Username: ' + username);
    }
    else {
      setError("Invalid Username")
    }
    if (email_check.test(email)) {
      console.log('Email: ' + email);
    }
    else {
      setError("Invalid E-mail");
      errors = 1;
    }
    if (password != confirmPass) {
      setError("Passwords not matching");
      errors = 1;
    }
    else if (password.length < 8 || password.length > 32) {
      setError("Password needs to be between 8 and 32 characters long")
      errors = 1;
    }
    else {
      console.log('Password: ' + crypto.SHA256(password));
    }

    if (errors == 0) {
      console.log('Id: ' + date.getTime());
      setError(" ")
    }
  };

  return (
    <>
      <div className='form-body'>
        <div className="form-container">
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm_password">Confirm password:</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={confirmPass}
              onChange={handleConfirmChange}
              required
            />
          </div>
          <div className='errorMessage'>
            {errorMessage}
          </div>
          <div className='formButtons'>
            <button className="formButton" type="button" onClick={() => handleSubmit(false)}>
              Cancel
            </button>
            <button className="formButton" type="button" onClick={() => handleSubmit(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className='footerContainer'>
        <Footer />
      </div>

    </>
  );
};

export default SignIn;