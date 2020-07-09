import React from 'react';
import './App.scss';

import me from './pic.jpg';

const App: React.FC = () => {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li>Top</li>
          <li>Resume</li>
          <li>Portolio</li>
          <li>Contact</li>
        </ul>
      </nav>
      <header className="header">
        <div className="info">
          <h1>
            Hi, I'm: <span className="important">Julio Fuentes</span>
          </h1>
          <p>
            I am an aspiring full stack{' '}
            <span className="important">javascript developer </span>
            in Milwaukee Wisconsin . I am always on the lookout for new
            opportunities to learn and grow. Don't be a strainger{' '}
            <span role="img" aria-label="content">
              😊
            </span>
          </p>
          <button type="button" className="contact-button">
            Hit me up!
          </button>
        </div>

        <div className="image">
          <img src={me} alt="me" />
        </div>
      </header>
    </>
  );
};

export default App;
