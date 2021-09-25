import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const defaultSurveyData = {
    feeling: 0,
    understanding: 0,
    supported: 0,
    comments: ''
};

//reducer to temporarily store survery answers
const surveyData = (state = defaultSurveyData, action) => {
    //in surveyData reducer
    if (action.type === 'ADD_FEELING_INPUT') {
        const objectCopy = {...state};
        objectCopy.feeling = action.payload;
        console.log(objectCopy);
        return objectCopy;
        // return {...state, action.payload} //this breaks it and not sure why
    } 
    else if (action.type === 'ADD_UNDERSTANDING_INPUT') {
        const objectCopy = { ...state };
        objectCopy.understanding = action.payload;
        console.log(objectCopy);
        return objectCopy;
    }
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
