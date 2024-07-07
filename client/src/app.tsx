import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Start from './pages/Start/Start';
import AboutMe from './pages/AboutMe/About-me';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects/Projects';

import './index.css';

const App: React.FC = () => {
  
  return (
    <>
      <div className="app-container">
        <Navbar />
        <Start />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
