import React from 'react';

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <p className="subtitle">Hello, I'm</p>
        <h1>Mohamed Atheef</h1>
        <h2>IT Undergraduate & <span className="highlight">Aspiring Software & Embedded Systems Engineer</span></h2>
        <p className="description">
         Passionate about building efficient systems, automating processes, and solving complex problems using technology. Expected Graduation: May 2029.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Let's Talk</a>
        </div>
      </div>
    </header>
  );
}