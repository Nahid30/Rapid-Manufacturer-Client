import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Shared/Loading';
import ManageAllProductRow from './ManageAllProductRow';

const ManageAllOrders = () => {

    const { isLoading, data: purchases, refetch } = useQuery('purchases', () => fetch(`https://rapid-manufacturer.herokuapp.com/purchases`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-10 my-10'>
            {/* <h2>Manage All orders</h2> */}

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Order Quantity</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                       {
                        purchases.map((item, index) => <ManageAllProductRow
                            key={item._id}
                            item={item}
                            index={index}
                            refetch={refetch}
                        ></ManageAllProductRow>)   
                       }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;