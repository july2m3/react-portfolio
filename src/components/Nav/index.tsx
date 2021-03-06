import React from 'react';

function Nav() {
  return (
    <nav className="navigation">
      <div className="dropdown">
        <span className="menu">Menu</span>
        <ul className="dropdown-menu">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1wNUELDJT3cnT8ZcbMKjAT5eYwflslrx9ZfXofKFCp54/edit?usp=sharing">
              Resume
            </a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
