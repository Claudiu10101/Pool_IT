import React, { useState } from 'react';
import bootstrap from 'bootstrap'
import Footer from '../components/Footer'
import './CSS/form.css'
import './CSS/pool.css'

function CreatePool() {
  const [Title, setTitle] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleOption1Change = (e) => {
    setOption1(e.target.value);
  };

  const handleOption2Change = (e) => {
    setOption2(e.target.value);
  };

  const handleOption3Change = (e) => {
    setOption3(e.target.value);
  };


  const handleSubmit = (arg0: boolean) => {
    console.log('Title: ' + Title);
    console.log('Option 1: ' + option1);
    console.log('Option 2: ' + option2);
    console.log('Option 3: ' + option3);
  };



  return (
    <>
      <div className='form-body'>
        <div className="form-container">
          <h2>Create Pool</h2>
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
            <label htmlFor="option1">Option 1:</label>
            <input
              id="option1"
              name="option1"
              value={option1}
              onChange={handleOption1Change}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="option2">Option 2:</label>
            <input
              id="option2"
              name="option2"
              value={option2}
              onChange={handleOption2Change}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="option3">Option 3:</label>
            <input
              id="option3"
              name="option3"
              value={option3}
              onChange={handleOption3Change}
              required
            />
          </div>
          <select className="choiceNum"id="options" name="options">
            <option value="option1">Single choice</option>
            <option value="option2">Multiple choice</option>
          </select>
          <div className='formButtons'>
            <button className="formButton" type="button" onClick={() => handleSubmit(false)}>
              Cancel
            </button>
            <button className="formButton" type="button" onClick={() => handleSubmit(true)}>
              Create
            </button>
          </div>
        </div>
      </div>
      <div className='footerContainer'>
        <Footer />
      </div >

    </>
  )
}

export default CreatePool