import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    

    return (
        <div>
            <div class="drawer drawer-mobile bg-slate-100">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-2xl text-blue-500 text-center my-2'>Welcome to your Dashboard: {user?.displayName}</h2>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side rounded">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                        <>
                            <li><Link to="/dashboard">My Order</Link></li>
                            <li><Link to="/dashboard/addReview">Add A Review</Link></li>
                        </>
                        
                        <>
                            <li><Link to="/dashboard/manageOrders">Manage All Orders</Link></li>
                            <li><Link to="/dashboard/addProduct">Add A Product</Link></li>
                            <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                            <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                        </>



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;