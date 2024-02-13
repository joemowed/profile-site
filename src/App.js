import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './styles/Navbar.css';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
