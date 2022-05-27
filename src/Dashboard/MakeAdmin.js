import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Shared/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {

    const { data: users, isLoading ,refetch} = useQuery('users', () => fetch('https://rapid-manufacturer.herokuapp.com/user',{
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

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove Admin</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                           users.map((user,index) => <AdminRow
                           key={user._id}
                           user={user}
                           index={index}
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