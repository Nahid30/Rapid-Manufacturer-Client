import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3RRBDYgSlnTO88S1XZtBbXWOdR8mboh20WTFagXWi6rys0mFSIA64Y9NKPeB7Vyd94nWJo6UNt7265czk05xLK00eDTqUEsG');


const Payment = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth);
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])


    // const { data: payment, isLoading } = useQuery('item', () => fetch(url).then(res => res.json()))

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div className='px-10'>
            {/* <h2 className='text-purple-500 text-2xl'>Please Pay For: {id}</h2> */}

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                <div class="card-body">
                    <h2>Hello Mr. <span className='text-cyan-500'>{user?.displayName}</span></h2>

                    <h2 class="card-title">Please Pay for <span className='text-cyan-500'>{item.name}</span> </h2>

                    <p>Please Pay: <span className='text-rose-600'>${item.price}</span> </p>

                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm item={item} />
                    </Elements>

                </div>
            </div>
        </div>

    );
};

export default Payment;