//Page 5 of survey
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ThankYouPage() {
    //attach a variable to useHistory method
    const history = useHistory();

    //tell the button what to do when clicked
    const handleClickEvent = () => {
        history.push('/'); //move to the designated page
    }
    return (
        <>
            <Typography variant="h5">Thank You! Your feedback has been submitted!</Typography>
            <br />
            <Button variant="contained" onClick={handleClickEvent}>Leave New Feedback</Button>
        </>
    );
}

export default ThankYouPage;