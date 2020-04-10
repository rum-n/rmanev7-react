import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Today from './components/daytoday/Today';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Main from './components/main/Main';
import Blog from './components/blog/Blog';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/blog' component={Blog} />
          </Switch>
        <Footer />
        <Today />
      </div>
    </Router>
  );
}

export default App;
