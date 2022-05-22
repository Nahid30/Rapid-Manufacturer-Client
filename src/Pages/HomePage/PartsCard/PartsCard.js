import React from 'react';

const PartsCard = ({ part }) => {

    const { name, img, description, price, minimumOQ, availableQ } = part;
    return (
        <div >
            <div class="card w-80 bg-base-100 shadow-xl mx-auto ">
                <img src={img} alt="" />
                <div class="card-body">
                    <h2 class="card-title text-green-600">{name}</h2>
                    <p>Price: <span className='text-red-600'>${price}</span> </p>
                    <p>Minimum Order: <span className='text-red-600'>{minimumOQ}</span></p>
                    <p>Available Quantity: <span className='text-red-600'>{availableQ}</span></p>
                    <p>Description: {description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PartsCard;