import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import FeelingPage from '../FeelingPage/FeelingPage';
import CommentsPage from '../CommentsPage/CommentsPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportedPage from '../SupportedPage/SupportedPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import ThankYouPage from '../ThankYouPage/ThankYouPage';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* start router and run components associated with each url */}
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/feeling">
          <FeelingPage />
        </Route>

        <Route path="/understanding">
          <UnderstandingPage />
        </Route>

        <Route path="/supported">
          <SupportedPage />
        </Route>

        <Route path="/comments">
          <CommentsPage />
        </Route>

        <Route path="/review">
          <ReviewPage />
        </Route>

        <Route path="/thanks">
          <ThankYouPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
