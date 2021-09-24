import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';

function App() {


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/feeling">
          <p>Hey.</p>
        </Route>

        <Route path="/understanding">
        </Route>

        <Route path="/supported">
        </Route>

        <Route path="/comments">
        </Route>

        <Route path="/review">
        </Route>
      </Router>

    </div>
  );
}

export default App;
