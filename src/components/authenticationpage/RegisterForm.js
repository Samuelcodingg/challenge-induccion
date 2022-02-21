import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

export const RegisterForm = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        redirectToReferrer: false  
    });

    const { name, email, password, redirectToReferrer } = values;

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    }

    const clickSubmit = (event) => {
        event.preventDefault();

        if (name === '' || email === '' || password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields'
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Registration Successful',
                text: 'You are now registered'
            });

            setValues({
                ...values,
                redirectToReferrer: true
            });
        }
    }

    const redirectUser = () => {
        if (redirectToReferrer) {
            return <Redirect to='/' />
        }
    }

    return (
        <div>
            {redirectUser()}
            <div className='container my-4'>
                <div className='row'>
                    <h1 className='col-md-7 text-center mx-auto fw-800'>
                        Welcome. We exist to make entrepreneurship easir
                    </h1>
                </div>
                <div className='row'>

                    <form className='col-md-4 mx-auto'>
                        <div className='form-group mt-2'>
                            <p>
                                Name<span className='text-danger'>*</span>
                            </p>
                            <input 
                                type="text" 
                                className='form-control' 
                                placeholder='Enter your name' 
                                value={name}
                                onChange={handleChange('name')}    
                            />
                        </div>
                        <div className='form-group mt-2'>
                            <p>
                                Email<span className='text-danger'>*</span>
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
                                Password<span className='text-danger'>*</span>
                            </p>
                            <input 
                                type="password" 
                                className='form-control' 
                                placeholder='Enter your password' 
                                value={password}
                                onChange={handleChange('password')}    
                            />
                        </div>
                        <div className='form-group mt-4'>
                            <button 
                                className='btn btn-primary w-100'
                                onClick={clickSubmit}
                            >
                                Sign up
                            </button>
                        </div>
                        <p className='text-center text-secondary mt-3'>By creating an account, you agree to the terms & condition, and our privacy policy.</p>
                        <p className='fst-italic text-center mt-3 text-secondary'>Or</p>
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
                        <p className='text-center text-secondary mt-3'>Already using Simple? <Link to="/auth/login">Sign in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
