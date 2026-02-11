import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Internships from './components/Internships';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Achievements />
        <Internships />
        <Contact />
      </main>
    </div>
  );
}

export default App;
