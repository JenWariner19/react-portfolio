import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  const styles = {
    section: {
      backgroundColor: "white",
      color: "black",
      marginTop: "20px",
      minHeight: "50vh"
    },
    heading: {
      textDecoration: "underline",
      fontSize: "42px"
    },
    form: {
      display: "block",
      marginBottom: "15px"
    },
    messageInput: {
      width: "100%",
      height: "150px"
    }
  };

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

  const handleBlur = (inputType) => {
    if (inputType === 'email' && !validateEmail(email)) {
      setErrorMessage('Email is required!');
    } else if (inputType === 'userName' && !userName) {
      setErrorMessage('Name is required!');
    } else if (inputType === 'message' && !message) {
      setErrorMessage('Message is required!');
    } else {
      setErrorMessage('');
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
    <div style={styles.section} className="container">
      <h1 style={styles.heading} className="mt-10">Contact Me</h1>
      <form className="form">
        <input
          style={styles.form}
          value={userName}
          name="userName"
          onChange={handleInputChange}
          onBlur={() => handleBlur('userName')}
          type="text"
          placeholder="Name"
        />
        <input
          style={styles.form}
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={() => handleBlur('email')}
          type="email"
          placeholder="Email"
        />
        <textarea
          style={{ ...styles.form, ...styles.messageInput }}
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={() => handleBlur('message')}
          placeholder="Insert Message Here"
        ></textarea>
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