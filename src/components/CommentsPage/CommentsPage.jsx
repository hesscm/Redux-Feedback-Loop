//Page 4 of survey
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './CommentsPage.css';
import Button from '@mui/material/Button';



function CommentsPage() {
    const dispatch = useDispatch();
    //attach a variable to useHistory method
    const history = useHistory();
    //set a variable to set the input
    const [commentsChoice, setCommentsChoice] = useState('');

    //tell the button what to do when clicked
    const handleClickEvent = (event) => {
        event.preventDefault(); //stop page from refreshing
        console.log('comments choice', commentsChoice);
        const action = ({ type: 'ADD_COMMENTS_INPUT', payload: commentsChoice })
        dispatch(action); //send to redux
        history.push('/review'); //move to the designated page
    }

    return (
        <>
            <h5>3 of 4 pages</h5>
            <p>Any comments you want to leave?</p>
            <p>Note: If you went backwards to get here, you'll need to reinput your comments if you hit 'Next.'</p>
            {/* form to add some text in a field */}
            <form onSubmit={handleClickEvent}>
                <input
                    onChange={(event) => setCommentsChoice(event.target.value)}
                    type="textarea"
                    value={commentsChoice}
                    placeholder="Anything else? This part is optional."
                    name="comments-value" />
                <br />
                <Button variant="contained" type="submit">Next</Button>

            </form>
        </>
    );
}

export default CommentsPage;