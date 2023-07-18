import React from 'react';

export default function Portfolio() {
  return (
    <div className='container'>
      <div>
        <h1>Portfolio</h1>
      </div>
      <br></br>
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <div className="card">
              <a href='https://pure-woodland-40877.herokuapp.com/'>
                <img
                  className="card-img-top img-fluid"
                  src='../assets/homeward bound.png'
                  alt="homeward bound"
                />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <a href='https://jenwariner19.github.io/dinner-date-planner/'>
                <img
                  className="card-img-top img-fluid"
                  src='../assets/dinner date planner.png'
                  alt="dinner date"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="card">
              <a href='https://jenwariner19.github.io/weather-dashboard/'>
                <img
                  className="card-img-top img-fluid"
                  src='../assets/weather dashboard.png'
                  alt="weather dashboard"
                />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <a href='https://jenwariner19.github.io/daily-planner/'>
                <img
                  className="card-img-top img-fluid"
                  src='../assets/daily planner.png'
                  alt="daily planner"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="card">
              <a href='https://jenwariner19.github.io/code-quiz/'>
                <img
                  className="card-img-top img-fluid"
                  src='../assets/code quiz.png'
                  alt="code quiz"
                />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <a href='https://jenwariner19.github.io/password-generator/'>
                <img
                  className="card-img-top img-fluid"
                  src='../assets/password generator.png'
                  alt="password generator"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}