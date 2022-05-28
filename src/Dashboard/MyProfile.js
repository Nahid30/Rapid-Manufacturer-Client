import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    const [update, setUpdate] = useState(null);
    const [profile, setProfile] = useState();
    useEffect(() => {
        fetch(`https://rapid-manufacturer.herokuapp.com/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProfile(data)


            })
    }, [user, update])

    const handleUpdateProfile = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const education = event.target.education.value;
        const linkedIn = event.target.linkedIn.value;

        const userData = { name, email: user?.email, phone, education, linkedIn }
        console.log(userData);

        fetch(`https://rapid-manufacturer.herokuapp.com/updateUser/${user?.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdate(data);

            })
    }



    return (

        <div>
             <h2 className='text-center my-6 text-emerald-500 font-semibold text-lg'> My profile</h2>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>


                <div className='mt-10 '>
                    <div class="mockup-phone border-primary ">
                        <div class="camera"></div>
                        <div class="display ">

                            <div class="artboard artboard-demo phone-1">
                                <div className='text-center'>
                                    <p>Name:{profile?.name}</p>
                                    <p>Email: {profile?.email}</p>
                                    <p>Phone: {profile?.phone}</p>
                                    <p>Education: {profile?.education}</p>
                                    <p>LinkedIn: {profile?.linkedIn}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100 my-10">
                    <form onSubmit={handleUpdateProfile} class="card-body">

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" name="name" required defaultValue={profile?.name} placeholder="Name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" name="email" disabled defaultValue={profile?.email} placeholder="Email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input type="number" name="phone" required defaultValue={profile?.phone} placeholder="Phone" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Education</span>
                            </label>
                            <input type="text" name="education" required defaultValue={profile?.education} placeholder="Education" class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">LinkedIn</span>
                            </label>
                            <input type="text" placeholder="LinkedIn" required defaultValue={profile?.linkedIn} name="linkedIn" class="input input-bordered" />

                        </div>

                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default MyProfile;