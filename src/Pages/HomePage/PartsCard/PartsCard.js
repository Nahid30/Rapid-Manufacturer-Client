import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsCard = ({ part }) => {

    const { _id, name, img, description, price, minimumOQ, availableQ } = part;
    console.log(part)

    const navigate = useNavigate();


    const navigateToCardDetail = id =>{
        navigate(`/item/${id}`);
    }

   

    return (
        <div >
            <div className="card w-80 bg-base-100 shadow-xl mx-auto ">
                <img src={img} alt="" />
                <div className="card-body">
                    <h2 className="card-title text-xl text-emerald-500">{name}</h2>
                    <p> <span className='text-gray-500'>Price:</span>  <span className='text-red-600'>${price}</span> </p>
                    <p> <span className='text-gray-500'> Minimum Order:</span> <span className='text-red-600'>{minimumOQ}</span></p>
                    <p> <span className='text-gray-500'> Available Quantity:</span> <span className='text-red-600'>{availableQ}</span></p>
                    <p> <span className='text-gray-500'> Description:</span> {description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={ () => navigateToCardDetail (_id) } className="btn btn-primary text-white">Buy Now</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default PartsCard;