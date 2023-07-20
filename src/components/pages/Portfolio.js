import React from 'react';

export default function Portfolio() {
  const styles = {
    section: {
      backgroundColor: "#EBFBED",
      color: "black",
      marginTop: "20px",
      minHeight: "50vh",
      fontFamily: "Open Sans"
    },
    heading: {
      textDecoration: "underline",
      fontSize: "42px"
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center"
    },
    button: {
      margin: "5px",
      padding: "8px 16px",
      backgroundColor: "black",
      color: "white",
      border: "none",
      borderRadius: "4px",
      textDecoration: "none",
      cursor: "pointer",
      transition: "background-color 0.3s",
      fontSize: "16px",
      fontWeight: "bold",
      outline: "none"
    }
  };

  return (
    <div style={styles.section} className='container'>
      <div>
        <h1 style={styles.heading}>Portfolio</h1>
      </div>
      <br />
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <div className="card">
              <a href='https://pure-woodland-40877.herokuapp.com/'>
                <img
                  className="card-img-top img-fluid"
                  src='./assets/homeward bound.png'
                  alt="homeward bound"
                />
              </a>
              <div style={styles.buttonContainer}>
                <a style={styles.button} href='https://pure-woodland-40877.herokuapp.com/'>View Demo</a>
                <a style={styles.button} href='https://github.com/JenWariner19/homeward-bound'>GitHub Repo</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <a href='https://jenwariner19.github.io/dinner-date-planner/'>
                <img
                  className="card-img-top img-fluid"
                  src='./assets/dinner date planner.png'
                  alt="dinner date"
                />
              </a>
              <div style={styles.buttonContainer}>
                <a style={styles.button} href='https://jenwariner19.github.io/dinner-date-planner/'>View Demo</a>
                <a style={styles.button} href='https://github.com/JenWariner19/dinner-date-planner'>GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="card">
              <a href='https://jenwariner19.github.io/weather-dashboard/'>
                <img
                  className="card-img-top img-fluid"
                  src='./assets/weather dashboard.png'
                  alt="weather dashboard"
                />
              </a>
              <div style={styles.buttonContainer}>
                <a style={styles.button} href='https://jenwariner19.github.io/weather-dashboard/'>View Demo</a>
                <a style={styles.button} href='https://github.com/JenWariner19/weather-dashboard'>GitHub Repo</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <a href='https://jenwariner19.github.io/daily-planner/'>
                <img
                  className="card-img-top img-fluid"
                  src='./assets/daily planner.png'
                  alt="daily planner"
                />
              </a>
              <div style={styles.buttonContainer}>
                <a style={styles.button} href='https://jenwariner19.github.io/daily-planner/'>View Demo</a>
                <a style={styles.button} href='https://github.com/JenWariner19/daily-planner'>GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="card">
              <a href='https://jenwariner19.github.io/code-quiz/'>
                <img
                  className="card-img-top img-fluid"
                  src='./assets/code quiz.png'
                  alt="code quiz"
                />
              </a>
              <div style={styles.buttonContainer}>
                <a style={styles.button} href='https://jenwariner19.github.io/code-quiz/'>View Demo</a>
                <a style={styles.button} href='https://github.com/JenWariner19/code-quiz'>GitHub Repo</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <a href='https://jenwariner19.github.io/password-generator/'>
                <img
                  className="card-img-top img-fluid"
                  src='./assets/password generator.png'
                  alt="password generator"
                />
              </a>
              <div style={styles.buttonContainer}>
                <a style={styles.button} href='https://jenwariner19.github.io/password-generator/'>View Demo</a>
                <a style={styles.button} href='https://github.com/JenWariner19/password-generator'>GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
