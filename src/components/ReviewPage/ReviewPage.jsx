//Page 5 of survey
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function ReviewPage() {
    const reduxStore = useSelector(store => store);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleCompleteSurvey = () => {
        console.log(reduxStore.surveyData)
        //last validation check in case we have a hackermans that went straight to this page
        if (reduxStore.surveyData.feeling == 0 ||
            reduxStore.surveyData.understanding == 0 ||
            reduxStore.surveyData.support == 0) {

            alert('Something seems to be missing. Please go back and double check the first 3 pages.')
        }
        else {
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
                const action = { type: 'CLEAR_ALL_INPUTS' }
                dispatch(action);
                history.push('/thanks');
            }).catch((error) => {
                alert('Error in handleCompleteSurvey.')
                console.log(error);
            })
        }
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