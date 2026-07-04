import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">MA<span style={{color: 'var(--accent)'}}>.</span></a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}