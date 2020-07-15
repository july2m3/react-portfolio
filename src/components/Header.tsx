import React from "react";

import me from "./pic.jpg";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="info">
          <h1>
            Hi, I'm: <span className="important">Julio Fuentes</span>
          </h1>
          <p>
            I am an aspiring full stack{" "}
            <span className="important">javascript developer </span>
            in Milwaukee Wisconsin . I am always on the lookout for new
            opportunities to learn and grow. Don't be a stranger{" "}
            <span role="img" aria-label="content">
              😊
            </span>
          </p>
          <button type="button" className="contact-button">
            Hit me up!
          </button>
        </div>

        <div className="scroll-cue">
          <a href="#portfolio">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>

        <div className="image">
          {" "}
          <img src={me} alt="me" />{" "}
        </div>
      </header>
    </div>
  );
}

export default Header;
