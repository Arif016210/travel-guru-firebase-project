import React, { useContext, useState } from 'react';
import './Login.css';

import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { handleGoogleSignIn, handleSignOut, initializeLoginFramework, handleFbLogin, CreateUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';




function Login() {

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photo: '',

    });
    initializeLoginFramework();

    const [logInUser, setLogInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            });
    };
    const fbSignIn = () => {
        handleFbLogin()
            .then(res => {
                handleResponse(res, true);
            });

    };

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            });
    };




    const handleResponse = (res, redirect) => {
        setUser(res);
        setLogInUser(res);
        if (redirect) {
            history.replace(from);
        };
    };


    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value);
        let isFromValid = true;

        if (e.target.name === 'email') {
            isFromValid = /\S+@\S+\.\S+/.test(e.target.value);
        };
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const isNumberHasValid = /\d{1}/.test(e.target.value);
            isFromValid = isPasswordValid && isNumberHasValid;
        };
        if (isFromValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        };

    };


    const handleSubmit = (e) => {

        if (newUser && user.email && user.password) {
            CreateUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                });
        };

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                });
        };

        e.preventDefault();
    }



    return (
        <div className="login-container" >

            {
                user.isSignIn ? <button className="signin-signout" onClick={signOut} >Sign Out</button> : <button className="signin-signout" onClick={googleSignIn} >Sign in</button>
            }


            <br />
            <div className="login-section">
                <form onSubmit={handleSubmit} >
                    {
                        newUser && <p>Create a new account</p>
                    }
                    {
                        newUser && <input type="text" name="name" className="form-control" onBlur={handleBlur} placeholder="Enter your First Name" />
                    }
                    <br />
                    {
                        newUser && <input type="text" name="name" className="form-control" onBlur={handleBlur} placeholder="Enter your last Name" />
                    }
                    <br />
                    {
                        newUser && <input type="text" name="name" className="form-control" onBlur={handleBlur} placeholder="UserName or Email" />
                    }
                    <br />
                    {
                        newUser ?
                            <input type="text" name='text' onBlur={handleBlur} className="form-control" placeholder="Confirm Password..." required />

                            :
                            <input type="text" name='email' onBlur={handleBlur} className="form-control" placeholder="Enter your email..." required />
                    }
                    <br />
                    {
                        newUser ?
                            <input type="password" name='password' onBlur={handleBlur} className="form-control" placeholder="retype confirm password" required />

                            : <input type="password" name='password' onBlur={handleBlur} className="form-control" placeholder="Enter your password" required />
                    }
                    <br />
                    <input className="form-control btn-modify" type="submit" value={newUser ? ('Sign Up') : ('Sign In')} />
                    <br />
                    <button className="btn-modify" name="newUser" onClick={() => setNewUser(!newUser)} >  {newUser ? ('Sign In') : ('Create a new user')} </button>
                </form>


                <p style={{ color: 'red' }} > {user.error} </p>
                {
                    user.success && <p style={{ color: 'green' }} > User {newUser ? 'Create' : 'Logged in'} successfully </p>
                }
            </div>

            <br />
            <button className="google-facebook" onClick={googleSignIn}  >Continue with Google</button>
            <br />
            <br />
            <button className="google-facebook" onClick={fbSignIn} >  Continue with Facebook</button>


        </div>
    );
}

export default Login;
