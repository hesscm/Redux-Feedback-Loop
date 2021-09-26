import AdminPageItem from "./AdminPageItem";
import axios from 'axios';
import {useState, useEffect} from 'react';

function AdminPage() {
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        fetchFeedbackItems();
    },[])

    const fetchFeedbackItems = () => {
        axios.get('/feedback').then((response) => {
            console.log(response.data);
            setFeedbackList(response.data);
        }).catch((error) => {
            console.log(error);
            alert('Error making GET request.');
        })
    }

    return(
        <>
        <h1>Feedback Results!</h1>
        <table>
            <tr>
                <th>Feeling</th>
                <th>Comprehension</th>
                <th>Support</th>    
                <th>Comments</th>   
                <th>Delete</th>
            </tr>
            <tbody>

            </tbody>



        </table>
        </>
    );
}

export default AdminPage;