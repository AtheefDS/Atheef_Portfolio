import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section bg-light">
      <div className="container contact-container" style={{textAlign: 'center'}}>
        <h3 className="section-title">Get In Touch</h3>
        <p style={{marginBottom: '2rem', color: 'var(--text-secondary)'}}>
          I'm currently looking for internship and entry-level opportunities. Feel free to reach out!
        </p>
        <div className="social-links" style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=atheefcse@gmail.com" target="_blank" rel="noreferrer" className="btn btn-primary">
              Email Me 
              </a>
          <a href="https://www.linkedin.com/in/mohamed-atheef-it/" target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn</a>
          <a href="https://github.com/AtheefDS" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub</a>
        </div>
      </div>
    </section>
  );
}