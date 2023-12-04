import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'react-bootstrap';
import crypto from 'crypto-js'
import './CSS/form.css'
import axios from 'axios';

const api = axios.create({
  baseURL:"http://localhost:3000/"
})

interface MyModalProps {
  showModal: boolean;
  handleClose: () => void;
}

const Login: React.FC<MyModalProps> = ({ showModal, handleClose }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (arg0: boolean) => {
      if(arg0){
        let json = {
          email: email,
          password: password
        }
        api.post('/Users/Login', json ).then(res => { 
          localStorage.setItem('token', res.data.token)
          window.location.reload()
        })
      }
      handleClose();
    };


  return (
    <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal">
      <div className="form-container">
          <h2 className='form-title'>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
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
              Login
            </button>
          </div>
        </div>
    </Modal>
  );
};

export default Login;
