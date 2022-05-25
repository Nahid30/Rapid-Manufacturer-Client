import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Shared/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {

    const { data: users, isLoading ,refetch} = useQuery('users', () => fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>All Users: {users.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                           users.map(user => <AdminRow
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></AdminRow>)
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;