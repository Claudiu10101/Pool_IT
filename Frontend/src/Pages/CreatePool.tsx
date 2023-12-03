import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./CSS/form.css";

interface MyModalProps {
  showModal: boolean;
  handleClose: () => void;
}

const CreatePool: React.FC<MyModalProps> = ({ showModal, handleClose }) => {
  const [Title, setTitle] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");

  const handleTitleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setTitle(e.target.value);
  };

  const handleOption1Change = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setOption1(e.target.value);
  };

  const handleOption2Change = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setOption2(e.target.value);
  };

  const handleOption3Change = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setOption3(e.target.value);
  };

  const handleSubmit = (arg0: boolean) => {
    if(!arg0){
      handleClose()
      return;
    }
    console.log("Title: " + Title);
    console.log("Option 1: " + option1);
    console.log("Option 2: " + option2);
    console.log("Option 3: " + option3);
  };
  return (
    <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal">
        <div className="form-container">
          <h2 className="form-title">Create Pool</h2>
          <div className="form-group">
            <label htmlFor="Title">Title:</label>
            <input
              id="Title"
              name="Title"
              value={Title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="options">Options:</label>
            <input
              id="option1"
              name="option1"
              value={option1}
              onChange={handleOption1Change}
              required
            />
          </div>
          <div className="form-group">
            <input
              id="option2"
              name="option2"
              value={option2}
              onChange={handleOption2Change}
              required
            />
          </div>
          <div className="form-group">
            <input
              id="option3"
              name="option3"
              value={option3}
              onChange={handleOption3Change}
              required
            />
          </div>
          <select className="choiceNum" id="options" name="options">
            <option value="option1">Single choice</option>
            <option value="option2">Multiple choice</option>
          </select>
          <div className="formButtons">
            <button
              className="formButton"
              type="button"
              onClick={() => handleSubmit(false)}
            >
              Cancel
            </button>
            <button
              className="formButton"
              type="button"
              onClick={() => handleSubmit(true)}
            >
              Create
            </button>
          </div>
        </div>
    </Modal>
  );
};

export default CreatePool;
