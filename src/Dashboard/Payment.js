import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3RRBDYgSlnTO88S1XZtBbXWOdR8mboh20WTFagXWi6rys0mFSIA64Y9NKPeB7Vyd94nWJo6UNt7265czk05xLK00eDTqUEsG');


const Payment = () => {
    const { id } = useParams()
    console.log(id);
    const [user] = useAuthState(auth);
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://rapid-manufacturer.herokuapp.com/buy/${id}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])


    return (
        <div className='px-10'>

            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                <div className="card-body">
                    <h2>Hello Mr. <span className='text-cyan-500'>{user?.displayName}</span></h2>

                    <h2 className="card-title">Please Pay for <span className='text-cyan-500'>{item?.productName}</span> </h2>

                    <p>Please Pay: <span className='text-rose-600'>${item?.price}</span> </p>

                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
                <div className="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm item={item} />
                    </Elements>

                </div>
            </div>
        </div>

    );
};

export default Payment;