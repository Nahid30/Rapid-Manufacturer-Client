import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://rapid-manufacturer.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='grid  lg:grid-cols-3 sm:grid-cols-1 gap-8 my-10'>

                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}

                    ></Review>)
                }


        </div>
    );
};

export default Reviews;