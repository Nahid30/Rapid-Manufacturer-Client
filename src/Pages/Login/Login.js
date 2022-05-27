import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [token] = useToken(user || gUser)

    let signInError;

    useEffect( ()=>{
        if (token) {
            navigate(from, { replace: true });
        }    
    } ,[token, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-white mb-2'>{error?.message || gError?.message}</p>
    }


    

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
    };


    return (
        <div className='flex h-screen justify-center items-center px-10'>
            <div className="card w-96  bg-base-100 shadow-xl">
                <div className="card-body bg-slate-600">
                    <h2 className="text-center font-bold text-2xl text-white">LOGIN</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white font-bold">Email</span>

                            </label>
                            <input type="email" placeholder="Enter Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please provide a valid Email'
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>

                        {/* password start */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white font-bold">Password</span>

                            </label>
                            <input type="password" placeholder="Enter Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: 6,
                                    message: 'Must be 6 characters or longer'
                                })}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>

                        {signInError}

                        <input className='btn bg-black text-white w-full max-w-xs' type="submit" value="Login" />
                    </form>
                    <small> <span className=' font-semibold text-black'>Don't have an account?</span> <Link className=' font-semibold px-1  text-white bg-red-600 rounded ' to="/signup">Create a New Account</Link> </small>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-active btn-primary text-white">Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;

