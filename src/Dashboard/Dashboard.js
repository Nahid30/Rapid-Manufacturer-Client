import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);


    return (
        <div>
            <div className="drawer drawer-mobile bg-slate-100">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-center mt-10'> <span className='text-2xl text-rose-600 my-8'>Welcome to your Dashboard:</span> <span className='text-cyan-500 text-2xl'>{user?.displayName}</span></h2>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side rounded">
                    <label for="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        <li><Link to="/dashboard/myProfile">My Profile</Link></li>

                        {
                            admin ?
                                <>
                                    <li><Link to="/dashboard/manageOrders">Manage All Orders</Link></li>
                                    <li><Link to="/dashboard/addProduct">Add A Product</Link></li>
                                    <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                                    <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                                </>
                                :
                                <>
                                    <li><Link to="/dashboard">My Orders</Link></li>
                                    <li><Link to="/dashboard/addReview">Add A Review</Link></li>
                                </>
                        }







                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;