import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import crypto from 'crypto-js'
import './CSS/form.css'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/'
})

interface MyModalProps {
  showModal: boolean;
  handleClose: () => void;
}

const SignIn: React.FC<MyModalProps> = ({ showModal, handleClose }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirm] = useState('');
  
    const [errorMessage, setError] = useState(" ");
  
    const handleUsernameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setUsername(e.target.value);
    };
  
    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setPassword(e.target.value);
    };
  
    const handleConfirmChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setConfirm(e.target.value);
    }
  
    const handleSubmit = (arg0: boolean) => {
      if(!arg0){
        handleClose();
        return;
      }
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
  
      if (errors == 0) {
        let json = {
          "email": email,
          "password": password
        }

        api.post('Users', json).then(res => {
          console.log(res.data.token)
          localStorage.setItem('token', res.data.token)
          window.location.reload();
        })
        handleClose();
      }
    };
  
  return (
    <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal">
      <div className="form-container">
          <h2 className="form-title">Sign Up</h2>
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
    </Modal>
  );
};

export default SignIn;
