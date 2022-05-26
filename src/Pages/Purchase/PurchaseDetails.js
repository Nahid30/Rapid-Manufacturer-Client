import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurchaseDetails = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [error, setError] = useState('');

    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data)
            })
    }, [])




    const handleBuyNow = event => {
        event.preventDefault();

        const userName = user.displayName;
        const userEmail = user.email;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const orderQuantity = parseInt(event.target.orderQuantity.value);
        const productName = item.name;
        const price = item.price;
        const img = item.img;


        // sent this information data to the database 

        const purchaseData = {

            userName,
            userEmail,
            address,
            phone,
            orderQuantity,
            productName,
            price,
            img
        }


        if (item.minimumOQ <= orderQuantity && item.availableQ >= orderQuantity) {
            fetch('http://localhost:5000/purchase', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(purchaseData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Purchase Successful');
                    event.target.reset();

                })
            setError('');


        }
        else {
            setError('You can order Equal or More than minimum Quantity and Equal or Less than available Quantity!');

        }



    }



    return (
        <div className='flex flex-col lg:flex-row justify-center items-center'>
            <div className="card w-80 bg-base-100 shadow-xl mx-auto my-4">
                <img src={item.img} alt="" />
                <div className="card-body">
                    <h2 className="card-title text-2xl text-green-600">{item.name}</h2>
                    <p>Price: <span className='text-red-600'>${item.price}</span> </p>
                    <p>Minimum Order: <span className='text-red-600'>{item.minimumOQ}</span></p>
                    <p>Available Quantity: <span className='text-red-600'>{item.availableQ}</span></p>
                    <p>Description: {item.description}</p>

                </div>
            </div>


            <div className='p-6'>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleBuyNow} class="card-body">
                        <h1 className='text-xl text-cyan-500'>Name : {user?.displayName}</h1>
                        <h1 className='text-xl text-cyan-500'>Email : {user?.email}</h1>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-emerald-500 text-lg">Address</span>
                            </label>
                            <textarea type="text" name='address' placeholder="Type your Address" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-emerald-500 text-lg">Phone Number</span>
                            </label>
                            <input type="number" name='phone' placeholder="Type your Phone Number" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-emerald-500 text-lg">Order Quantity (increase/decrease)</span>
                            </label>
                            <input type="number" name='orderQuantity' placeholder="Quantity" class="input input-bordered" required />

                        </div>
                        <p className='text-red-500'>{error}</p>
                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary">Purchase</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>

    );
};

export default PurchaseDetails;