import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const SignUp = () => {

    
    const [error, setError]= useState()
    const {createUser} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.fullName.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setError('')
            form.reset();
        })
        .catch( e => {
            console.error(e)
            setError(e.message);
        });
    }

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <h1 className='text-center'>Please Sign Up!</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputFullName" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="exampleInputFullName" name='fullName'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPhotoUrl" class="form-label">Photo Url</label>
                    <input type="text" class="form-control" id="exampleInputPhotoUrl" name='photoUrl'/>
                </div>
                
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">{error}</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name='password'/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Sign Up</button>
                <Link to='login' type="submit" class="btn btn-success ms-3">Already have an account,Login Now</Link>
                <button onClick={handleGoogleSignIn} type="submit" class="btn btn-secondary w-100 mt-3">Sign Up With Google</button>
                <button type="submit" class="btn btn-secondary w-100 mt-3">Sign Up With Github</button>
                </form>
        </div>
    );
};

export default SignUp;