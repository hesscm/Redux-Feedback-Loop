import AdminPageItem from "./AdminPageItem";
import axios from 'axios';
import { useState, useEffect } from 'react';
import './AdminPage.css'
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
            <Typography variant="h3">Feedback Results!</Typography>
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Feeling</TableCell>
                            <TableCell align="center">Comprehension</TableCell>
                            <TableCell align="center">Support</TableCell>
                            <TableCell align="center">Comments</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                        {/* <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead> */}
                <TableBody>
                    {/* loop through the list and display to DOM.  */}
                    {feedbackList.map((item) => {
                        return <AdminPageItem key={item.id} item={item} fetchFeedbackItems={fetchFeedbackItems}/>
                    })}
                </TableBody>
            </Table>
            </TableContainer>
        </>
    );
}

export default AdminPage;