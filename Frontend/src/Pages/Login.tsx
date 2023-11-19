import React, { useState } from 'react';
import './CSS/login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Here you can add logic to validate the username and password, and perform the login action.
    // For a simple example, we'll just log the values to the console.
    console.log('Username: ' + username);
    console.log('Password: ' + password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
        Login
      </button>
    </div>
  );
};

export default Login;