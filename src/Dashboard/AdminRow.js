import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, refetch, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://rapid-manufacturer.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Made Admin Successfully')

            })

    }

    const handleDeleteUser = email => {
        console.log(email);

        fetch(`https://rapid-manufacturer.herokuapp.com/user/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Delete User Successfully')

            })

    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs btn-success text-white">Make Admin</button>}
            </td>
            <td><button onClick={() => handleDeleteUser(email)} className="btn btn-xs btn-primary">Remove</button>
            </td>
        </tr>
    );
};

export default AdminRow;