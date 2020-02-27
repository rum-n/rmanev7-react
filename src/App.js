import React from 'react';
import './App.css';

import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Today from './components/daytoday/Today';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <About />
      <Projects />
      <Footer />
      <Today />
    </div>
  );
}

export default App;
