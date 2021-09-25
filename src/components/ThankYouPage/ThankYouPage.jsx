//Page 5 of survey
import { useHistory } from 'react-router-dom';

function ThankYouPage() {
    //attach a variable to useHistory method
    const history = useHistory();

    //tell the button what to do when clicked
    const handleClickEvent = () => {
        history.push('/'); //move to the designated page
    }
    return (
        <>
            <h1>Thank You! Your feedback has been submitted!</h1>
            <button onClick={handleClickEvent}>Leave New Feedback</button>
        </>
    );
}

export default ThankYouPage;