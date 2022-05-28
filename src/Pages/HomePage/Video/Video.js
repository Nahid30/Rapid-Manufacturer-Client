import React from 'react';

const Video = () => {
    return (

        <div>
            <h1 className='text-center text-2xl font-semibold text-emerald-500	'>Video Advertisement</h1>

            <div className='flex justify-center my-6'>


                <iframe width="560" height="315" src="https://www.youtube.com/embed/ViddsDFIkwY?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Video;