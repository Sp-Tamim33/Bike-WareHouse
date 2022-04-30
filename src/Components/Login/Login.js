import React, { useEffect, useState } from 'react';
import './AuthForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogo from '../../assests/img/google.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';




const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, googleUser, GoogleLoding, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }



        // setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" })
        }

    }

    const handleLogin = (e) => {
        e.preventDefault();

        // console.log(userInfo)

        signInWithEmail(userInfo.email, userInfo.password);

    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleUser) {
            navigate(from);
            toast('account logged !')
        }
    }, [user, googleUser]);

    useEffect(() => {
        const error = hookError || googleError;
        if (error) {
            // console.log(error);
            switch (error?.code) {
                case "auth/wrong-email":
                    toast("Invalid email");
                    break;

                case "auth/wrong-password":
                    toast("Wrong password !!")
                    break;
                default:
                    toast("something went wrong !")
            }
        }

    }, [hookError, googleError])


    return (
        <div>
            <div className='auth-form-container '>
                <ToastContainer />
                <div className='auth-form'>
                    <h1 className="text-3xl font-semibold">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className='input-field'>
                            <label htmlFor='email'>Email</label>
                            <div onChange={handleEmailChange} className='input-wrapper'>
                                <input
                                    type='text'
                                    name='email'
                                    id='email'
                                />
                            </div>
                            {errors?.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Password</label>
                            <div onChange={handlePasswordChange} className='input-wrapper'>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                />
                            </div>
                            {errors?.password && <p className="error">{errors.password}</p>}
                        </div>
                        <button
                            type='submit' className='auth-form-submit'>
                            Login
                        </button>
                    </form>
                    <p className='redirect'>
                        New to SP's PhotoLab ?{" "}
                        <Link to='/signup' className='underline text-blue-500'>Create New Account</Link>
                    </p>
                    <p className='redirect'>
                        Forgotten Password ?{" "}
                        <button onClick={async () => {
                            await sendPasswordResetEmail(userInfo.email);
                            alert('Sent email');
                        }} className='underline text-blue-500'>Forgot password</button>
                    </p>
                    <div className='horizontal-divider'>
                        <div className='line-left' />
                        <p>or</p>
                        <div className='line-right' />
                    </div>
                    <div className='input-wrapper'>
                        <button onClick={() => signInWithGoogle()} className='google-auth'>
                            <img src={GoogleLogo} alt='' />
                            <p> Continue with Google </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;