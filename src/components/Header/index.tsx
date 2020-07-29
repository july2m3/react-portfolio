import React from "react";

import { ReactComponent as Me } from "./me.svg";

function Header() {
  return (
    <header className="hero" id="header">
      <div className="info">
        <h1>
          Hi, I'm, <span className="important name">Julio Fuentes</span>
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
      </div>

      <div className="image">
        {" "}
        {/* <img src={me} alt="me" />{' '} */}
        {/* <svg src={Me} /> */}
        <Me />
      </div>

      <div className="scroll-cue">
        <a href="#portfolio">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
