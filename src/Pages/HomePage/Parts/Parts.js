import React, { useEffect, useState } from 'react';
import PartsCard from '../PartsCard/PartsCard';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('https://rapid-manufacturer.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

  


    return (
        <div>
            <h2 className='text-center  font-semibold  text-2xl my-6 text-emerald-500 '>Our All Products</h2>
            <div className='grid  lg:grid-cols-3 sm:grid-cols-1 gap-8 my-10'>

                {
                    parts.map(part => <PartsCard
                        key={part._id}
                        part={part}
                    ></PartsCard>)
                }

               

            </div>
        </div>
    );
};

export default Parts;