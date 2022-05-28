import React from 'react';

const ProductionSummary = () => {
    return (
        <div>
            <div className='my-20'>
                <div>
                    <h2 className='text-center text-2xl text-emerald-500 font-semibold my-10'>Our Monthly Production</h2>
                </div>

                <div className='flex justify-center my-10'>
                    <div className='text-right'>
                        <p> <span className='text-gray-600'>Hard Disk:</span> <progress class="progress progress-accent  w-56" value="60" max="100"></progress></p><br />

                        <p> <span className='text-gray-600'>Processor:</span> <progress class="progress progress-accent  w-56" value="50" max="100"></progress> </p><br />
                        <p> <span className='text-gray-600'>USB Ports: </span><progress class="progress progress-accent  w-56" value="60" max="100"></progress></p> <br />
                        <p> <span className='text-gray-600'>Cooler Fan: </span> <progress class="progress progress-accent  w-56" value="70" max="100"></progress></p> <br />
                        <p> <span className='text-gray-600'>CPU Cooler: </span><progress class="progress progress-accent  w-56" value="90" max="100"></progress></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductionSummary;