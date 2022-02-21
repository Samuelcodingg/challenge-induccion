import React from 'react';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  return (
    <div>
        
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
                        <input type="email" className='form-control' placeholder='Enter your email adress' />
                    </div>
                    <div className='form-group mt-3'>
                        <p>
                            Password
                        </p>
                        <input type="password" className='form-control' placeholder='Enter your password' />
                    </div>
                    <div className='form-group mt-3 d-flex align-items-center'>
                        <input type="radio" name="Remember" /> &nbsp;
                        <label for="remember" >Remember this device</label>
                    </div>
                    <div className='form-group mt-4'>
                        <button className='btn btn-primary w-100'>
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
