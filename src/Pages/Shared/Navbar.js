import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/')

    };

    const menuItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/parts">All Products</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/reviews">Reviews</NavLink></li>
        <li><NavLink to="/myportfolio">Portfolio</NavLink></li>

        {user ?

            <>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <button onClick={logout} className="btn btn-outline btn-primary  ">Sign Out</button>
            </>

            :

            <>
                <li><NavLink to="/login">Login</NavLink></li>
            </>
        }

    </>




    return (
        <div className=''>
            <div className="navbar bg-base-100 bg-slate-800  ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden bg-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 text-white bg-black  shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl"> <span className='text-red-500'>Rapid</span> <span className='text-white'>Manufacturer</span> </Link>
                </div>
                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal p-0 text-white">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden bg-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>


                </div>
            </div>
        </div>
    );
};

export default Navbar;