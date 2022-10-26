import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import './Login.css'
const Login = () => {
    const [error, setError]= useState('')
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('')
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.error(error);
            setError(error.message);
        })
            
    }

    return (
        <div>
            <h1 className='text-center'>Please Login!</h1>
            <form onSubmit={handleSubmit}>
                
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text"> {error}</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name='password'/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <Link to='/signup' type="submit" class="btn btn-success ms-3">Don't have account,Sign Up Now</Link>
                </form>
        </div>
    );
};

export default Login;