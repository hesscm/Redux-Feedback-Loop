import axios from 'axios';
const moment = require('moment'); //format time with moment.js
import Button from '@mui/material/Button';
//Source: https://github.com/jonatanklosko/material-ui-confirm
import { useConfirm } from 'material-ui-confirm';

//created to help manipulate individual items in the table
function AdminPageItem({ item, fetchFeedbackItems }) {
    //set formatted time to a variable
    const formattedDate = moment(item.date).format('MMM Do YY');
    const confirm = useConfirm();

    const handleDelete = () => {
        console.log('in handleDelete');
        //pop up an alert with a message
        confirm({ description: 'WARNING! You are about to delete this entry from the database. THIS CANNOT BE RECOVERED. Do you want to continue?' })
            .then(() => { //if Ok is clicked...
                console.log('deleted')
                axios.delete(`/feedback/${item.id}`) //send delete request to server with this entry ID
                    .then(response => { //then refresh DOM
                        console.log('cleared feedback item', response);
                        fetchFeedbackItems(); 
                    })
                    .catch(error => { //throw an error message
                        console.log('error clearing feedback item', error);
                    })
            }) //if Cancel is clicked, do nothing.
            .catch(() => { console.log('Entry saved.') });
    }

    return (
        <tr>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>{item.comments}</td>
            <td>{formattedDate}</td>
            <td><Button variant="contained" onClick={handleDelete}>Delete</Button></td>
        </tr>
    );
}

export default AdminPageItem;