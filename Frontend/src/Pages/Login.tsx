import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'react-bootstrap';
import crypto from 'crypto-js'
import './CSS/form.css'

interface MyModalProps {
  showModal: boolean;
  handleClose: () => void;
}

const Login: React.FC<MyModalProps> = ({ showModal, handleClose }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (arg0: boolean) => {
      if(arg0){
        console.log('Username: ' + username);
        console.log('Password: ' + crypto.SHA256(password));
      }
      handleClose();
    };


  return (
    <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal">
      <div className="form-container">
          <h2 className='form-title'>Login</h2>
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
    </Modal>
  );
};

export default Login;
