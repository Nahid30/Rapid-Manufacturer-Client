import React from 'react';

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SignUp = () => {

    
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const [token] = useToken(user || gUser);

    let signInError;
    
    if(loading || gLoading || updating){
        return <Loading></Loading>
    }

    if(error || gError || updateError){
        signInError= <p className='text-white mb-2'>{error?.message || gError?.message || updateError?.message}</p>
    }

    if (token) {
        console.log(user || gUser)
        navigate('/parts');

    }


    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName:data.name});
    };


    return (
        <div className='flex h-screen justify-center items-center px-10'>
            <div className="card w-96  bg-base-100 shadow-xl">
                <div className="card-body bg-slate-600">
                    <h2 className="text-center font-bold text-2xl text-white">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-white font-bold">Name</span>

                            </label>
                            <input type="text" placeholder="Enter Your Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />

                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt  text-red-500">{errors.name.message}</span>}
                               


                            </label>
                        </div>

                        {/* email  */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-white font-bold">Email</span>

                            </label>
                            <input type="email" placeholder="Enter Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please provide a valid Email'
                                })}
                            />

                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>

                        {/* password start */}

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-white font-bold">Password</span>

                            </label>
                            <input type="password" placeholder="Enter Your Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: 6,
                                    message: 'Must be 6 characters or longer'
                                })}
                            />

                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


                            </label>
                        </div>

                        {signInError}

                        <input className='btn bg-black text-white w-full max-w-xs' type="submit" value="Sign UP" />
                    </form>
                    <small> <span className=' font-semibold text-black'>Already have an Account?</span> <Link className=' font-semibold px-1  text-white bg-red-600 rounded ' to="/login">Please Login</Link> </small>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-active btn-primary text-white">Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;