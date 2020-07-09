import React from 'react';
import './App.scss';

import me from './pic.jpg';

const App: React.FC = () => {
  return (
    <div className="App">
      <main className="container">
        <div className="info">
          <h1>Julio Fuentes</h1>
          <h2>Full Stack Dev</h2>
        </div>
        <div className="image">
          <img src={me} alt="me" />
        </div>
        <div className="social">
          <ul className="links">
            <li>
              <span role="img" aria-label="happy">
                😬
              </span>
            </li>
            <li>
              <span role="img" aria-label="happy">
                😬
              </span>
            </li>
            <li>
              <span role="img" aria-label="happy">
                😬
              </span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;
