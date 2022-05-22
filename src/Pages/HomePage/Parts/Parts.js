import React, { useEffect, useState } from 'react';
import PartsCard from '../PartsCard/PartsCard';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])



    return (
        <div>
            <h2 className='text-center text-2xl font-bold my-6 text-slate-800 '>Parts Items </h2>
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