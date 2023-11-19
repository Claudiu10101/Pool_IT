import React, { useState } from 'react';
import './CSS/signin.css'

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

  const handleSubmit = () => {
    // Here you can add logic to handle the signup form submission.
    // For a simple example, we'll just log the values to the console.
    console.log('Username: ' + username);
    console.log('Email: ' + email);
    console.log('Password: ' + password);
  };

  return (
    <div className="sign-up-container">
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

      <button className="formButton" type="button" onClick={handleSubmit}>
        Sign Up
      </button>
    </div>
  );
};

export default SignIn;