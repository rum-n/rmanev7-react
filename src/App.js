import React from 'react';
import './App.css';

import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Today from './components/daytoday/Today';

function App() {

  return (
    <div className="App">
      <Nav />
      <Footer />
      <Today />
    </div>
  );
}

export default App;
