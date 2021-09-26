import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import FeelingPage from '../FeelingPage/FeelingPage';
import CommentsPage from '../CommentsPage/CommentsPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportedPage from '../SupportedPage/SupportedPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import ThankYouPage from '../ThankYouPage/ThankYouPage';
import AdminPage from '../AdminPage/AdminPage';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
//Fancy confirm alert provided by: https://github.com/jonatanklosko/material-ui-confirm
import { ConfirmProvider } from 'material-ui-confirm';


//establish a theme with MUI
//Source: https://blog.logrocket.com/3-ways-to-add-custom-fonts-to-your-material-ui-project/
const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});


function App() {
  return (
    //wrap the app in a theme with MUI
    <ThemeProvider theme={theme}>

      <div className='App'>
        <header className='App-header'>
          <Typography variant="h3" className='App-title'>Feedback!</Typography>
          <Typography variant="h5">Don't forget it!</Typography>
        </header>
        {/* start router and run components associated with each url. First page shown is HomePage.jsx */}
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

          <Route path="/admin">
            <ConfirmProvider>
            <AdminPage />
            </ConfirmProvider>
          </Route>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
