//Page 4 of survey
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './CommentsPage.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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
            <Typography variant="subtitle2">4 of 4 pages</Typography>
            <Typography variant="h5">Any comments you want to leave?</Typography>
            <br />
            {/* form to add some text in a field */}
            <form  className="comments-input" onSubmit={handleClickEvent}>
                <TextField
                    onChange={(event) => setCommentsChoice(event.target.value)}
                    variant="filled"
                    multiline
                    fullWidth
                    maxRows={5}
                    label="Optional"
                    // value={commentsChoice}
                    name="comments-value" />
                <br />
                <br />
                <Button variant="contained" type="submit">Next</Button>
                <br /> <br />
                <Typography variant="subtitle2">Note: If you went backwards to get here, you'll need to reinput your comments if you hit 'Next.'</Typography>


            </form>
        </>
    );
}

export default CommentsPage;