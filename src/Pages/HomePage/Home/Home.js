import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Parts from '../Parts/Parts';
import Review from '../Reviews/Review';
import Reviews from '../Reviews/Reviews';

const Home = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <div>

                {
                    reviews.slice(0,6).map(review => <Review
                        key={review._id}
                        review={review}

                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Home;