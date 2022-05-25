import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {

    const [user] = useAuthState(auth);

    const { isLoading, data: purchases, refetch } = useQuery('purchases', () => fetch(`http://localhost:5000/purchase/${user.email}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    // const { _id, name, img, description, price, minimumOQ, availableQ } = cart;

    return (
        <div className='px-10'>
            <h2 className='my-4 text-xl text-green-500'>My Orders:</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
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