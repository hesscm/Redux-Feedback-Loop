import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//reducer to temporarily store survery answers
const surveyData = (state = {}, action) => {
    //in surveyData reducer
    return state;
}

//create redux instance to hold all reducers in a single store
const storeInstance = createStore(
    combineReducers({
        surveyData
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    //wrap App in a provider to make Redux available everywhere
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
