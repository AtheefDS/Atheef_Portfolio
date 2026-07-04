import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'; 

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer style={{textAlign: 'center', padding: '2rem', background: '#111', color: '#666', fontSize: '0.9rem'}}>
        &copy; 2026 Mohamed Atheef. Built with React.
      </footer>
    </>
  );
}

export default App;