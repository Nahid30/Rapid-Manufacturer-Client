import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyOrderRow = ({ purchase, index, refetch }) => {
    const { _id, productName, img, price, orderQuantity } = purchase;

    const handleDeleteOrder = (id) => {
        console.log('Order Removed')

        fetch(`http://localhost:5000/purchase/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
                toast.success('Item Deleted Successfully')
            })
    }

    return (

        <tr>
            <th> {index + 1} </th>
            <td>{productName}</td>
            <td>  <div class="avatar">
                <div class="w-20 rounded">
                    <img src={purchase.img} alt="" />
                </div>
            </div> </td>
            <td>${price}</td>
            <td>{orderQuantity}</td>
            {/* <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td> */}
            <td><button onClick={() => handleDeleteOrder(_id)} class="btn btn-xs">Remove Order</button></td>
            <td>

                {(price && !purchase.paid) && <Link to={`/dashboard/payment/${_id}`}> <button className='btn btn-xs btn-success'>Pay</button> </Link>}

                {(price && purchase.paid) && <div>
                    <span className='text-blue-500'>Paid</span>
                </div> }
            </td>

        </tr>
    );
};

export default MyOrderRow;