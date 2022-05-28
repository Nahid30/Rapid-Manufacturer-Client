import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {

    const [user] = useAuthState(auth);

    const { isLoading, data: purchases, refetch } = useQuery('purchases', () => fetch(`https://rapid-manufacturer.herokuapp.com/purchase/${user.email}`,{
        method: 'GET',
        headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-10'>
            <h2 className='my-4 text-xl text-green-500'>My Orders:</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Remove Orders</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.map((purchase, index) => <MyOrderRow
                                key={purchase._id}
                                purchase={purchase}
                                index={index}
                                refetch={refetch}
                            ></MyOrderRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;