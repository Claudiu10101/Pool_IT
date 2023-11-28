import React, { useState } from 'react';
import './CSS/form.css'
import Footer from '../components/Footer'
import crypto from 'crypto-js'

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (arg0: boolean) => {
    const date = new Date();
    console.log('Id: ' + date.getTime() + '_' + username);
    console.log('Username: ' + username);

    let email_check = new RegExp("[a-zA-Z0-9._]+@gmail.com");
    if (email_check.test(email)) {
      console.log('Email: ' + email);
    }
    else {
      console.log("Invalid E-mail");
    }
    console.log('Password: ' + crypto.SHA256(password));
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