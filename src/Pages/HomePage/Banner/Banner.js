import React from 'react';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner4 from '../../../images/banner4.jpg';
import banner5 from '../../../images/banner5.jpg';


const Banner = () => {

    return (
        <div>

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" alt='' />
                    <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-red-600">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-600">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-red-600">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-red-600">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-red-600">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-red-600">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner5} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-red-600">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-red-600">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;