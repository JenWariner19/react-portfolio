import React from 'react';

export default function Contact() {
  return (
    <div className="container">
      <h1 className="mt-10">Contact Me</h1>
      <div className="mb-3">
        <label for="fullname" className="form-label">Name:</label>
        <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter full name"/>
      </div>
      <div className="mb-3">
        <label for="emailaddress" className="form-label">Email address:</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label for="message" className="form-label">Message:</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div>
      <button type="button" className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}