import React from 'react';
import './MyPortfolio.css';
import img from '../../images/Myself.jpg';
import { Link } from 'react-router-dom';

const MyPorfolio = () => {
    return (

        <div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>


                <div className='flex justify-center my-10'>
                    <p className=''><img src={img} height={200} width={300} alt="" /></p>
                </div>

                <div className='mx-20 my-10'>
                    <h2 className='text-xl'>Hello, <span className='text-xl text-cyan-500'>Im Nahid Hossain</span> </h2>
                    <p>Education: BBA</p>
                    <p><small>Email: nahidshuvo30@gmail.com</small></p>

                    <h4 className='mt-2 text-gray-600 text-justify'>Im a professional junior web developer.I completed more than 20 websites.Im learning Programming constantly. If you need any help to build up your website feel free to contact with me.</h4>
                </div>

                <div className='flex justify-center my-10'>

                    <div className='text-right'>
                        <h1 className='text-center text-lg text-cyan-500 font-semibold'>My Skills</h1>
                        <span className='text-gray-600'>HTML:  <progress class="progress progress-accent  w-56" value="70" max="100"></progress></span>
                        <br />
                        <span className='text-gray-600 text-center'>CSS:  <progress class="progress progress-accent  w-56" value="60" max="100"></progress></span>
                        <br />
                        <span className='text-gray-600'>Javascript:  <progress class="progress progress-accent  w-56" value="70" max="100"></progress></span>
                        <br />
                        <span className='text-gray-600'>Bootstrap:  <progress class="progress progress-accent  w-56" value="80" max="100"></progress></span>
                        <br />
                        <span className='text-gray-600'>Tailwind:  <progress class="progress progress-accent  w-56" value="70" max="100"></progress></span>
                        <br />
                        <span className='text-gray-600'>React:  <progress class="progress progress-accent  w-56" value="80" max="100"></progress></span>
                        <br />
                        <span className='text-gray-600'>Firebase:  <progress class="progress progress-accent  w-56" value="90" max="100"></progress></span>
                        <br />
                        <span className='text-gray-600'>NodeJS:  <progress class="progress progress-accent  w-56" value="60" max="100"></progress></span>
                        <br />
                        <span className='text-gray-600'>Mongodb:  <progress class="progress progress-accent  w-56" value="60" max="100"></progress></span>
                        <br />

                    </div>

                </div>

            </div>
            <h1 className='text-center text-xl text-cyan-700'>Some Live Website Link:</h1>
            <p  className='text-center text-lg text-cyan-700 mt-5'>Click the Button below to see projects: </p>

            <div className='text-center my-10'>
                <button className='btn btn-primary'>
                    <a target="_blank" href="https://fruits-assignment-11.web.app/">Fruit WareHouse Project</a></button> <br />
                <button className='btn btn-primary my-6'>
                    <a target="_blank" href="https://fir-assignment-10-7ed92.web.app/">Photographer Project</a></button> <br />
                <button className='btn btn-primary'>
                    <a target="_blank" href="https://nahid-watch-house.netlify.app/">Watch House Project</a></button>
            </div>

        </div>

    );
};

export default MyPorfolio;




