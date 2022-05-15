import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const SignUp = () => {


    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate()

    let signInError;

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate('/appoinment')
    };


    if (loading || gLoading || updating) {

        return <Loading></Loading>
    }


    if (error || gError) {
        signInError = <p className='text-red-500 text-center mb-3'><small>{error?.message || gError?.message || updateError?.message}</small></p>

    }

    if (user || gUser) {

    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl mt-12">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name!!</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required!!'
                                    },

                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.name.message}</span>}

                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email!!</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required!!'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please type a valid Email'
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500"> {errors.email.message}</span>}

                            </label>
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required!!'
                                    },
                                    minLength: {

                                        value: 6,
                                        message: 'Must be six characters or longer!!'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500"> {errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}

                        <input className='btn w-full max-w-xs' value='Sign Up' type="submit" />
                    </form>


                    <small className='text-center pt-3'>
                        <p>Already have an account!!<Link to='/login' className='text-secondary '>   Click here to Log in</Link></p>
                    </small>

                    <div className="divider">OR</div>

                    <button onClick={() => createUserWithEmailAndPassword()}
                        className="btn btn-outline">
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;