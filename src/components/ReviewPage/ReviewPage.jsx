//Page 5 of survey
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
            axios({ //post feedback to the server
                method: 'POST',
                url: '/feedback',
                data: {
                    feeling: reduxStore.surveyData.feeling,
                    understanding: reduxStore.surveyData.understanding,
                    support: reduxStore.surveyData.support,
                    comments: reduxStore.surveyData.comments
                }
            }).then((response) => { //clear the state, and go to the /thanks page
                const action = { type: 'CLEAR_ALL_INPUTS' }
                dispatch(action);
                history.push('/thanks');
            }).catch((error) => { //log error
                alert('Error in handleCompleteSurvey.')
                console.log(error);
            })
        }
    }
    return (
        <>
            <Typography variant="h3">Review Your Feedback</Typography>
            <br />
            <Typography variant="h5">Feelings: {reduxStore.surveyData.feeling}/5</Typography>
            <Typography variant="h5">Understanding: {reduxStore.surveyData.understanding}/5</Typography>
            <Typography variant="h5">Support: {reduxStore.surveyData.support}/5</Typography>
            <Typography variant="h5">Comments: {reduxStore.surveyData.comments}</Typography>
            <br />
            <Button variant="contained" onClick={handleCompleteSurvey}>Submit</Button>
        </>
    )
}

export default ReviewPage;