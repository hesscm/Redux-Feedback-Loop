//Page 3 of survey
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SupportedPage() {
    const dispatch = useDispatch();
    //attach a variable to useHistory method
    const history = useHistory();
    //set a variable to set the input
    const [numberChoice, setNumberChoice] = useState(0);

    //tell the button what to do when clicked
    const handleClickEvent = (event) => {
        event.preventDefault(); //stop page from refreshing
        if (numberChoice == 0) {
            alert('Please select a number.')
        }
        else {
            console.log('supported choice', numberChoice);
            const action = ({ type: 'ADD_SUPPORTED_INPUT', payload: numberChoice })
            dispatch(action); //send to redux
            history.push('/comments'); //move to the designated page
        }
    }

    return (
        <>
            <Typography variant="subtitle2">3 of 4 pages</Typography>
            <Typography variant="h5">How well are you being supported?</Typography>
            {/* form to pick a radio button from 1-5. on submit, go to handleClickEvent function */}
            <form onSubmit={handleClickEvent}>
                <div>
                    <input
                        onChange={(event) => setNumberChoice(event.target.value)}
                        type="radio"
                        value="1"
                        name="supported-value" />1
                    <input
                        onChange={(event) => setNumberChoice(event.target.value)}
                        type="radio"
                        value="2"
                        name="supported-value" />2
                    <input
                        onChange={(event) => setNumberChoice(event.target.value)}
                        type="radio"
                        value="3"
                        name="supported-value" />3
                    <input
                        onChange={(event) => setNumberChoice(event.target.value)}
                        type="radio"
                        value="4"
                        name="supported-value" />4
                    <input
                        onChange={(event) => setNumberChoice(event.target.value)}
                        type="radio"
                        value="5"
                        name="supported-value" />5
                </div>
                <br />
                <Button variant="contained" type="submit">Next</Button>
            </form>
        </>
    );
}

export default SupportedPage;