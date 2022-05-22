import React from 'react';

const PartsCard = ({ part }) => {

    const { name, img, description, price, minimumOQ, availableQ } = part;
    return (
        <div >
            <div className="card w-80 bg-base-100 shadow-xl mx-auto ">
                <img src={img} alt="" />
                <div className="card-body">
                    <h2 className="card-title text-2xl text-green-600">{name}</h2>
                    <p>Price: <span className='text-red-600'>${price}</span> </p>
                    <p>Minimum Order: <span className='text-red-600'>{minimumOQ}</span></p>
                    <p>Available Quantity: <span className='text-red-600'>{availableQ}</span></p>
                    <p>Description: {description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-white">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PartsCard;