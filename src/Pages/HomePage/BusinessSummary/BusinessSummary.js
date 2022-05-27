import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='flex justify-center'>
            
            <div>
                <h1 className='text-center font-semibold text-2xl my-6 text-emerald-500'>Our Business Summary</h1>
                <div className="stats stats-vertical lg:stats-horizontal shadow ">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Our Happy Client</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Total Revenue</div>
                        <div className="stat-value text-cyan-500">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://api.lorem.space/image/face?w=128&h=128" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-title">Imported Country</div>
                        <div className="stat-value">150+</div>
                        <div className="stat-desc ">wanna go all over the world</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;