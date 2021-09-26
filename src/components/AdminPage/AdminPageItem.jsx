const moment = require('moment'); //format time with moment.js

//created to help manipulate individual items in the table
function AdminPageItem({item}) {
    //set formatted time to a variable
    const formattedDate = moment(item.date).format('MMM Do YY');
    return(
        <tr>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>{item.comments}</td>
            <td>{formattedDate}</td>
            <td><button>Delete</button></td>
        </tr>
    );
}

export default AdminPageItem;