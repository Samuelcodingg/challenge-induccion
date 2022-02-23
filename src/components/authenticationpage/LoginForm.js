import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

export const LoginForm = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        redirectToReferrer: false
    });

    const { email, password } = values;

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    }

    const clickSubmit = (event) => {
        event.preventDefault();

        if (email === '' || password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'You are now logged in',
                showConfirmButton: false,
                timer: 1500
            });

        
            setValues({
                ...values,
                redirectToReferrer: true
            });
        }
    }
    
    const redirectUser = () => {
        if (values.redirectToReferrer) {
            return <Redirect to='/' />
        }
    }

    return (
        <div>
            {redirectUser()}
            <div className='container my-4'>
                <div className='row'>
                    <h1 className='col-md-7 text-center mx-auto fw-800'>
                        Welcome back. We exist to make entrepreneurship easir
                    </h1>
                </div>
                <div className='row'>

                    <form className='col-md-4 mx-auto'>
                        <div className='form-group'>
                            <p>
                                Email
                            </p>
                            <input 
                                type="email" 
                                className='form-control' 
                                placeholder='Enter your email adress' 
                                value={email}
                                onChange={handleChange('email')}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <p>
                                Password
                            </p>
                            <input 
                                type="password" 
                                className='form-control' 
                                placeholder='Enter your password' 
                                value={password}   
                                onChange={handleChange('password')}  
                            />
                        </div>
                        <div className='form-group mt-3 d-flex align-items-center'>
                            <input type="radio" name="Remember" /> &nbsp;
                            <label for="remember" >Remember this device</label>
                        </div>
                        <div className='form-group mt-4'>
                            <button 
                                className='btn btn-primary w-100'
                                onClick={clickSubmit}
                            >
                                Sign in
                            </button>
                        </div>
                        <p className='fst-italic text-center mt-3'>Or</p>
                        <div className='form-group mt-3'>
                            <button className='btn btn-dark w-100'>
                                <i className="fa-brands fa-github"></i>
                                &nbsp;
                                Continue with Github
                            </button>
                            <button className='btn btn-danger w-100 mt-3'>
                                <i className="fa-brands fa-google"></i>
                                &nbsp;
                                Continue with Google
                            </button>
                        </div>
                        <p className='text-center text-secondary mt-3'>Don't you have an account? <Link to="/auth/register">Sign up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
