import React from 'react';

export default function Resume() {
  return (
    <div className="container">
      <h1>Resume</h1>
      <br></br>
      <a href="https://docs.google.com/document/d/1UYdAmTCj8WLt3MnMitn7z6MN2dYPCtMNDvi43mjm_uI/export?format=pdf">Download Resume</a>
      <br></br>
      <br></br>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <br></br>
      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}