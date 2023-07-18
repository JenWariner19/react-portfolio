import React from 'react';

export default function Footer() {
  const styles = {
    footer: {
      padding: "20px",
      backgroundColor: "#2874a6",
      color: "white",
      borderBottom: "5px solid black",
      marginBottom: "3px",
      display: "flex",
      justifyContent: "center"
    },
    links: {
      color: "white",
      backgroundColor: "black",
      margin: "3px",
      border: "none",
      borderRadius: "4px",
      padding: "8px 12px",
      cursor: "pointer",
      textDecoration: "none"
    }
  };

  return (
    <div style={styles.footer}>
      <button style={styles.links} onClick={() => window.open("https://github.com/JenWariner19")}>
        GitHub
      </button>
      <button style={styles.links} onClick={() => window.open("https://www.linkedin.com/in/jennifer-wariner-aaa496a/")}>
        LinkedIn
      </button>
      <button style={styles.links} onClick={() => window.open("https://stackoverflow.com/users/22242816/jenwariner19")}>
        Stack Overflow
      </button>
    </div>
  );
}