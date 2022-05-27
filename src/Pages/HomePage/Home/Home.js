import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Parts from '../Parts/Parts';
import PartsCard from '../PartsCard/PartsCard';
import Review from '../Reviews/Review';
import Reviews from '../Reviews/Reviews';

const Home = () => {

    const [parts, setParts] = useState([]);
    const newParts = [...parts.slice(0, 3)]
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <Banner></Banner>

            <div>
                <h2 className='text-center text-2xl font-semibold text-emerald-500 my-6 '>Parts Items </h2>
                <div className='grid  lg:grid-cols-3 sm:grid-cols-1 gap-8 my-10'>
                    {
                        newParts.map(part => <PartsCard
                            key={part._id}
                            part={part}
                        ></PartsCard>)
                    }
                    <button onClick={() => navigate('/parts')} className='btn btn-warning mx-auto'>See all Items</button>
                </div>
            </div>

            {/* <Parts></Parts> */}

            <BusinessSummary></BusinessSummary>

            <div>
                <h3 className='text-center text-2xl font-semibold text-emerald-500 my-6 '>Our Client Reviews</h3>
                <div className='grid  lg:grid-cols-3 sm:grid-cols-1 gap-8 my-10'>

                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review._id}
                            review={review}

                        ></Review>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;