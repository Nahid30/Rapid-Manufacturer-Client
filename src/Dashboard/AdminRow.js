import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user , refetch }) => {
    const { email ,role } = user;

    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data=> {
            refetch();
            toast.success('Made Admin Successfully')

        })

    }

    return (
        <tr>
            <th>3</th>
            <td>{email}</td>
            <td>{ role !=='admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}
            </td>
            <td><button class="btn btn-xs">Remove</button>
            </td>
        </tr>
    );
};

export default AdminRow;