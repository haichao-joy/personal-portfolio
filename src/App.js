import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import React from 'react';


function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Projects />
        <Contact />
        <Footer />

      
    </div>
  );
}

export default App;
