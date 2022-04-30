import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import GoogleLogo from '../../assests/img/google.svg'
import auth from '../../firebase.init';

const Signup = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });


    const [createUserWithEmailAndPassword, user, loading, hookError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

        // setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(userInfo);
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    };

    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!");
                    break;
                default:
                    toast("something went wrong");
            }
        }
    }, [hookError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);
    return (
        <div>
            <div className='auth-form-container '>
                <div className='auth-form'>
                    <h1 className="text-3xl">Sign Up</h1>
                    <form onSubmit={handleLogin}>
                        <div className='input-field'>
                            <label htmlFor='name'>Name</label>
                            <div className='input-wrapper'>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                />
                            </div>
                            {errors?.email && <p className="error">{errors.email}</p>}
                        </div>

                        <div className='input-field'>
                            <label htmlFor='email'>Email</label>
                            <div className='input-wrapper'>
                                <input
                                    onChange={handleEmailChange}
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                />
                            </div>

                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Password</label>
                            <div className='input-wrapper'>
                                <input
                                    onChange={handlePasswordChange}
                                    type='password'
                                    name='password'
                                    id='password'
                                    required
                                />
                            </div>
                            {errors?.email && <p className="error">{errors.email}</p>}

                        </div>
                        <div className='input-field'>
                            <label htmlFor='confirm-password'>Confirm Password</label>
                            <div className='input-wrapper'>
                                <input
                                    onChange={handleConfirmPasswordChange}
                                    type='password'
                                    name='confirmPassword'
                                    id='confirm-password'
                                />
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='auth-form-submit'>
                            Sign Up
                        </button>
                    </form>
                    <p className='redirect'>
                        Already have an account?{" "}
                        <Link to='/login' className='underline text-blue-500'>Login</Link>
                    </p>
                    <div className='horizontal-divider'>
                        <div className='line-left' />
                        <p>or</p>
                        <div className='line-right' />
                    </div>
                    <div className='input-wrapper'>
                        <button
                            onClick={() => signInWithGoogle()}
                            className='google-auth'>
                            <img src={GoogleLogo} alt='' />
                            <p> Continue with Google </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;