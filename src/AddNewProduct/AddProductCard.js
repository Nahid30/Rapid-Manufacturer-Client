import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddProductCard = ({addProduct}) => {
    const navigate = useNavigate();


    const navigateToCardDetail = id =>{
        navigate(`/item/${id}`);
    }
    const { _id, name, img, description, price, minimumOQ, availableQ } = addProduct;
    return (
        <div>
            
            <div className="card w-80 bg-base-100 shadow-xl mx-auto ">
                <img src={img} alt="" />
                <div className="card-body  ">
                    <h2 className="card-title text-2xl text-green-600">{name}</h2>
                    <p>Price: <span className='text-red-600'>${price}</span> </p>
                    <p>Minimum Order: <span className='text-red-600'>{minimumOQ}</span></p>
                    <p>Available Quantity: <span className='text-red-600'>{availableQ}</span></p>
                    <p>Description: {description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={ () => navigateToCardDetail (_id) } className="btn btn-primary text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductCard;