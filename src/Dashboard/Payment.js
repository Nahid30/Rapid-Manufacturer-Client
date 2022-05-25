import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loading';

const Payment = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth);

    const url = `http://localhost:5000/item/${id}`
    console.log(url);

    const { data: payment, isLoading } = useQuery('item', () => fetch(url).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-purple-500 text-2xl'>Please Pay For: {id}</h2>


            
                    <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                        <div class="card-body">
                            <h2 class="card-title">Pay for {payment}</h2>

                        <p>Please Pay: {payment.price} </p>

                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">



                        </div>
                    </div>
                </div>
            
    );
};

export default Payment;