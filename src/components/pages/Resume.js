import React from 'react';

export default function Resume() {
  const styles = {
    section: {
      backgroundColor: "white",
      color: "black",
      margin: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "800px",
      padding: "20px"
    },
    content: {
      textAlign: "left"
    },
    link: {
      color: "black",
      fontSize: "24px"
    },
    heading: {
      textDecoration: "underline",
      fontSize: "42px"
    }
  };

  return (
    <div style={styles.section} className="container">
      <div style={styles.content}>
        <h1 style={styles.heading}>Resume</h1>
        <br />
        <a style={styles.link} href="https://docs.google.com/document/d/1UYdAmTCj8WLt3MnMitn7z6MN2dYPCtMNDvi43mjm_uI/export?format=pdf">Download Resume</a>
        <br />
        <br />
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
        <br />
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
    </div>
  );
}