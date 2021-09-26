import AdminPageItem from "./AdminPageItem";
import axios from 'axios';
import { useState, useEffect } from 'react';
import './AdminPage.css'


function AdminPage() {
    //set variable to hold feedback from the database
    const [feedbackList, setFeedbackList] = useState([]);

    //run function once on page load
    useEffect(() => {
        fetchFeedbackItems();
    }, [])

    //get request to the server to retrieve the feedback table data
    const fetchFeedbackItems = () => {
        axios.get('/feedback').then((response) => {
            console.log(response.data);
            setFeedbackList(response.data);
        }).catch((error) => {
            console.log(error);
            alert('Error making GET request.');
        })
    }

    return (
        <>
            <h1>Feedback Results!</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* loop through the list and display to DOM.  */}
                    {feedbackList.map((item) => {
                        return <AdminPageItem key={item.id} item={item} fetchFeedbackItems={fetchFeedbackItems}/>
                    })}
                </tbody>
            </table>
        </>
    );
}

export default AdminPage;