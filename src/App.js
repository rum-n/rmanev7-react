import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Today from './components/daytoday/Today';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Main from './pages/main/Main';
import Blog from './pages/blog/Blog';
import RemoteWorkFamily from './pages/blog/posts/RemoteWorkFamily';
import BetterProposals from './pages/blog/posts/BetterProposals';

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
            <Route path='/starting-a-family-remote-work' component={RemoteWorkFamily} />
            <Route path='/how-to-write-better-proposals' component={BetterProposals} />
          </Switch>
        <Footer />
        <Today />
      </div>
    </Router>
  );
}

export default App;
