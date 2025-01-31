// src/App.js
import React from 'react';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import Services from './components/services';
import AboutMe from './components/aboutMe';

function App() {
  return (
    <div className="Rubik Vinyl, serif">
      {/* Hero Section */}
      <Hero />
      
      {/* AboutMe Section */}
      <AboutMe />

      {/*Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
