import React from 'react';
import { toast } from 'react-toastify';

const ManageAllProductRow = ({ item, refetch, index }) => {
    const { productName, img, price, _id, orderQuantity } = item;
    console.log(item);


    const handleDeleteProduct = id => {
        console.log(id);

        fetch(`https://rapid-manufacturer.herokuapp.com/purchase/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Delete Item Successfully')

            })

    }

    const handlePending = id => {
        console.log(id)
        fetch(`https://rapid-manufacturer.herokuapp.com/purchase/${id}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Shipped Successfully')

            })

    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-20 rounded">
                    <img src={img} alt="" />
                </div>
            </div></td>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{orderQuantity}</td>
            <td> {item.paid ? <p>Paid</p> : <button className='btn btn-sm btn-info text-white'>Unpaid</button> } </td>
            <td>
                {
                    (item.paid && item.shipped) && <p className='text-lg text-green-500 font-semibold'>Shipped</p>
                }
                {
                    (item.paid && !item.shipped) && <button onClick={() => handlePending(_id)} className='btn  btn-sm btn-warning'>Pending</button>
                }

                {
                    !item.paid && <button onClick={() => handleDeleteProduct(_id)} className="btn btn-sm btn-primary">Cancel</button>
                }
            </td>
        </tr>
    );
};

export default ManageAllProductRow;