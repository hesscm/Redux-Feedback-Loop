import { useHistory } from 'react-router-dom';

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
            <h2>Welcome! Please complete the feedback survey so we know how to help you better!</h2>
            <button onClick={handleClickEvent}>Begin The Survey</button>
        </>
    );
}

export default HomePage;