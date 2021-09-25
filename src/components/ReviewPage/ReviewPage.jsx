//Page 5 and last of survey
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function ReviewPage() {
    const reduxStore = useSelector(store => store);

    const handleCompleteSurvey = () => {
        console.log(reduxStore.surveyData)
        axios.post({




        })
        
    }

    return (
        <>
            <h3>Review Your Feedback</h3>
            <h5>Feelings: {reduxStore.surveyData.feeling}/5</h5>
            <h5>Understanding: {reduxStore.surveyData.understanding}/5</h5>
            <h5>Support: {reduxStore.surveyData.supported}/5</h5>
            <h5>Comments: {reduxStore.surveyData.comments}</h5>
            <button onClick={handleCompleteSurvey}>Submit</button>
        </>
    )
}

export default ReviewPage;