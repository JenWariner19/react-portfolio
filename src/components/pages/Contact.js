import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

export default function Contact() {
const [email, setEmail] = useState('');
const [userName, setUserName] = useState('');
const [message, setMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

const handleFormSubmit = (e) => {
  e.preventDefault();

  if (!validateEmail(email)) {
    setErrorMessage('Email is invalid');
    setUserName('');
    setEmail('');
    setMessage('');
    return;
  }

  if (!userName) {
    setErrorMessage('Name is required');
    setUserName('');
    setEmail('');
    setMessage('');
    return;
  }

  if (!message) {
    setErrorMessage('Message is required');
    setUserName('');
    setEmail('');
    setMessage('');
    return;
  }
  setSuccessMessage('Thank you for reaching out. I will be in contact with you at my earliest convenience.');
  setUserName('');
  setEmail('');
  setMessage('');
};

  return (
    <div className="container">
      <h1 className="mt-10">Contact Me</h1>
      <form className="form">
      <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Insert Message Here"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      {successMessage && (
        <div>
          <p className="success-text">{successMessage}</p>
        </div>
      )}
    </div>
  );
}