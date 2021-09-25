//Page 5 and last of survey
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function ReviewPage() {
    const reduxStore = useSelector(store => store);

    const handleCompleteSurvey = () => {
        console.log(reduxStore.surveyData)
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: reduxStore.surveyData.feeling,
                understanding: reduxStore.surveyData.understanding,
                support: reduxStore.surveyData.support,
                comments: reduxStore.surveyData.comments
            }
        }).then((response) => {
            alert('Thank you for your feedback!');
        }).catch((error) => {
            alert('Error in handleCompleteSurvey.')
            console.log(error);
        })
    }

return (
    <>
        <h3>Review Your Feedback</h3>
        <h5>Feelings: {reduxStore.surveyData.feeling}/5</h5>
        <h5>Understanding: {reduxStore.surveyData.understanding}/5</h5>
        <h5>Support: {reduxStore.surveyData.support}/5</h5>
        <h5>Comments: {reduxStore.surveyData.comments}</h5>
        <button onClick={handleCompleteSurvey}>Submit</button>
    </>
)
}

export default ReviewPage;