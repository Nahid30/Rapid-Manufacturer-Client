import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageProductRow = ({ manageProduct, index }) => {

    // const [itemId] = useParams();
    const { _id, name, img, minimumOQ, price, availableQ } = manageProduct;

    const handleDelete = id => {
        console.log('delete id', _id)
        fetch(`http://localhost:5000/item/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product ${name} is Deleted Successfully!`)
                }
            })
    }

    return (


        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td> <div class="avatar">
                <div class="w-20 rounded">
                    <img src={img} alt="" />
                </div> </div>
            </td>
            <td>{price}</td>
            <td>{minimumOQ}</td>
            <td>{availableQ}</td>
            <td><button onClick={() => handleDelete(_id)} class="btn btn-square btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></td>
        </tr>

    );
};

export default ManageProductRow;