import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h3 className="section-title">About Me</h3>
        <div className="about-grid">
          <div className="about-text">
            <p>I am currently pursuing my Bachelor's degree in Information Technology. My academic journey has provided me with a strong foundation in computer science principles, database management, and system architecture.</p>
            <p>I thrive at the intersection of development and operations, constantly experimenting with cloud technologies, containerization, and automation scripts.</p>
          </div>
          <div className="about-education">
            <h4>🎓 Education</h4>
            <div className="edu-item">
              <h5>B.Sc. in Information Technology</h5>
              <p className="institution">University of Moratuwa</p>
              <p className="duration">2025 - Present </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}