import React from 'react';

export default function Portfolio() {
  return (
    <div className='container'>
      <h1>Portfolio</h1>
      <div className="card">
        <a href='https://pure-woodland-40877.herokuapp.com/'>
          <img
            className="card-img-top"
            src='../assets/homeward bound.png'
            alt="homeward bound"
          />
        </a>
      </div>
      <div className="card">
        <a href='https://jenwariner19.github.io/dinner-date-planner/'>
          <img
            className="card-img-top"
            src='../assets/dinner date planner.png'
            alt="dinner date"
          />
        </a>
      </div>
      <div className="card">
        <a href='https://jenwariner19.github.io/weather-dashboard/'>
          <img
            className="card-img-top"
            src='../assets/weather dashboard.png'
            alt="weather dashboard"
          />
        </a>
      </div>
      <div className="card">
        <a href='https://jenwariner19.github.io/daily-planner/'>
          <img
            className="card-img-top"
            src='../assets/daily planner.png'
            alt="daily planner"
          />
        </a>
      </div>
      <div className="card">
        <a href='https://jenwariner19.github.io/code-quiz/'>
          <img
            className="card-img-top"
            src='../assets/code quiz.png'
            alt="code quiz"
          />
        </a>
      </div>
      <div className="card">
        <a href='https://jenwariner19.github.io/password-generator/'>
          <img
            className="card-img-top"
            src='../assets/password generator.png'
            alt="password generator"
          />
        </a>
      </div>
    </div>
  );
}