import axios from 'axios';
const moment = require('moment'); //format time with moment.js


//created to help manipulate individual items in the table
function AdminPageItem({ item, fetchFeedbackItems }) {
    //set formatted time to a variable
    const formattedDate = moment(item.date).format('MMM Do YY');

    const handleDelete = () => {
        console.log('in handleDelete');
        if (confirm('WARNING! You are about to delete this entry from the database. THIS CANNOT BE RECOVERED. Do you want to continue?') == true) {
            console.log('delete the thing');
            axios.delete(`/feedback/${item.id}`)
                .then(response => {
                    console.log('cleared feedback item', response);
                    fetchFeedbackItems();

                }).catch(error => {
                    console.log('error clearing feedback item', error);
                })
        } else {
            console.log('Entry saved.');
        }
    }

    return (
        <tr>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>{item.comments}</td>
            <td>{formattedDate}</td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
    );
}

export default AdminPageItem;