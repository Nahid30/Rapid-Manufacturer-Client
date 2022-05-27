import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurchaseDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [user] = useAuthState(auth);
    const [error, setError] = useState('');

    const [item, setItem] = useState([]);
    useEffect(() => {
        const url = `https://rapid-manufacturer.herokuapp.com/item/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
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
            fetch('https://rapid-manufacturer.herokuapp.com/purchase', {
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
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleBuyNow} className="card-body">
                        <h1 className='text-xl text-cyan-500'>Name : {user?.displayName}</h1>
                        <h1 className='text-xl text-cyan-500'>Email : {user?.email}</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-emerald-500 text-lg">Address</span>
                            </label>
                            <textarea type="text" name='address' placeholder="Type your Address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-emerald-500 text-lg">Phone Number</span>
                            </label>
                            <input type="number" name='phone' placeholder="Type your Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-emerald-500 text-lg">Order Quantity (increase/decrease)</span>
                            </label>
                            <input type="number" name='orderQuantity' placeholder="Quantity" className="input input-bordered" required />

                        </div>
                        <p className='text-red-500'>{error}</p>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Purchase</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>

    );
};

export default PurchaseDetails;