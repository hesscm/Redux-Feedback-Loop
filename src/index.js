import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


//default object for surveyData reducer
const defaultSurveyData = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
};

//reducer to temporarily store survery answers
const surveyData = (state = defaultSurveyData, action) => {
    console.log('in surveyData reducer');
    if (action.type === 'ADD_FEELING_INPUT') {
        // const objectCopy = { ...state }; //copy state
        // objectCopy.feeling = action.payload; //add payload to the property
        // console.log(objectCopy);
        // return objectCopy; //return the new/updated object

        //ALTERNATIVE: this breaks it and not sure why. I've tried a few variations of this with no success.
        //UPDATE: figured this part out. I'll keep both ways just to show my process.
        return { ...state, feeling: action.payload }
    }
    else if (action.type === 'ADD_UNDERSTANDING_INPUT') { //update understanding property
        const objectCopy = { ...state };
        objectCopy.understanding = action.payload;
        console.log(objectCopy);
        return objectCopy;
    }
    else if (action.type === 'ADD_SUPPORTED_INPUT') { //update support property
        const objectCopy = { ...state };
        objectCopy.support = action.payload;
        console.log(objectCopy);
        return objectCopy;
    }
    else if (action.type === 'ADD_COMMENTS_INPUT') { //update comments property
        const objectCopy = { ...state };
        objectCopy.comments = action.payload;
        console.log(objectCopy);
        return objectCopy;
    }
    else if (action.type === 'CLEAR_ALL_INPUTS') { //clear the state
        return defaultSurveyData;
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
