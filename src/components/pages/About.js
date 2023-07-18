import React from 'react';

export default function About() {
  const styles = {
    section: {
      backgroundColor: "white",
      color: "black",
      marginTop: "20px",
      marginBottom: "10px",
      minHeight: "50vh"
    },
    heading: {
      textDecoration: "underline",
      fontSize: "42px"
    }
  }
  return (
    <div style={styles.section}className="container">
      <h1 style={styles.heading}>About Me</h1>
      <img className="mb-10" src='./assets/headshot.jpg' alt="headshot"/>
      <br></br>
      <p className="mt-10">
      Motivated, efficient, detail-oriented individual with 7+ years of experience working in conference management. 
      Skilled in working across all aspects of building a conference: planning, sponsorship management, cost analysis, customer service, and marketing. 
      Looking for a new challenge where can I apply the skills I have learned in a different way.
      </p>
    </div>
  );
}