import React, { useState } from 'react';
import './CSS/form.css'
import Footer from '../components/Footer'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (arg0: boolean) => {
    console.log('Username: ' + username);
    console.log('Password: ' + password);
  };

  return (
    <>
      <div className='form-body'>
        <div className="form-container">
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
          <div className='formButtons'>
            <button className="formButton" type="button" onClick={() => handleSubmit(false)}>
              Cancel
            </button>
            <button className="formButton" type="button" onClick={() => handleSubmit(true)}>
              Login
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

export default Login;