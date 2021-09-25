//Page 1 of survey
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function FeelingPage() {
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
            console.log('feeling choice', numberChoice);
            const action = ({ type: 'ADD_FEELING_INPUT', payload: numberChoice })
            dispatch(action); //send to redux
            history.push('/understanding'); //move to the designated page
        }
    }

    return (
        <>
            <h5>1 of 4 pages</h5>
            <p>How are you feeling today?</p>
            {/* form to pick a radio button from 1-5. on submit, go to handleClickEvent function */}
            <form onSubmit={handleClickEvent}>
                <div>
                    <input
                        onChange={(event) => setNumberChoice(event.target.value)}
                        type="radio"
                        value="1"
                        name="feeling-value" />1
                    <input
                        onChange={(event) => setNumberChoice(event.target.value)}
                        type="radio"
                        value="2"
                        name="feeling-value" />2
                    <input
                        onChange={(event) => setNumberChoice(event.target.value)}
                        type="radio"
                        value="3"
                        name="feeling-value" />3
                    <input
                        onChange={(event) => setNumberChoice(event.target.value)}
                        type="radio"
                        value="4"
                        name="feeling-value" />4
                    <input
                        onChange={(event) => setNumberChoice(event.target.value)}
                        type="radio"
                        value="5"
                        name="feeling-value" />5
                </div>
                <br />
                <button type="submit">Next</button>
            </form>
        </>
    );
}

export default FeelingPage;