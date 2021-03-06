import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function HomePage() {
    //attach a variable to useHistory method
    const history = useHistory();

    //tell the button what to do when clicked
    const handleClickEvent = () => {
        console.log('hello');
        history.push('/feeling'); //move to the designated page
    }
    return (
        <>
            <Typography variant="h5" >Welcome! Please complete the feedback survey so we know how to help you better!</Typography>
            <br />
            <Button variant="contained" onClick={handleClickEvent}>Begin The Survey</Button>
        </>
    );
}

export default HomePage;