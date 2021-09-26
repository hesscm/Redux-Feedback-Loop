//created to help manipulate individual items in the table
function AdminPageItem({item}) {
    return(
        <tr>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>{item.comments}</td>
            <td><button>Delete</button></td>
        </tr>
    );
}

export default AdminPageItem;