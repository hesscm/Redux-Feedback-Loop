//Page 2 of survey
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//new radio form imports
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function UnderstandingPage() {
    const dispatch = useDispatch();
    //attach a variable to useHistory method
    const history = useHistory();
    //set a variable to set the input
    const [numberChoice, setNumberChoice] = useState(0);

    //tell the button what to do when clicked
    const handleClickEvent = (event) => {
        event.preventDefault(); //stop page from refreshing
        //ensure the user selects an option
        if (numberChoice == 0) {
            alert('Please select a number.')
        }
        else {
            console.log('understanding choice', numberChoice);
            const action = ({ type: 'ADD_UNDERSTANDING_INPUT', payload: numberChoice })
            dispatch(action); //send to redux
            history.push('/supported'); //move to the designated page
        }
    }

    return (
        <>
            <Typography variant="subtitle2">2 of 4 pages</Typography>
            <br />
            <Typography variant="h5">How well are you understanding the content?</Typography>
            <br />
            {/* form to pick a radio button from 1-5. on submit, go to handleClickEvent function */}
            {/* MUI update: could not get this to work with FormControl alone */}
            <form onSubmit={handleClickEvent}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Awful &rarr; Awesome!</FormLabel>
                    <RadioGroup row>
                        <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="1"
                            onChange={(event) => setNumberChoice(event.target.value)}
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="2"
                            onChange={(event) => setNumberChoice(event.target.value)}
                        />
                        <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label="3"
                            onChange={(event) => setNumberChoice(event.target.value)}
                        />
                        <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label="4"
                            onChange={(event) => setNumberChoice(event.target.value)}
                        />
                        <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label="5"
                            onChange={(event) => setNumberChoice(event.target.value)}
                        />
                    </RadioGroup>
                    <br />
                    <Button type="submit" variant="contained">Next</Button>
                </FormControl>
            </form>
        </>
    );
}

export default UnderstandingPage;