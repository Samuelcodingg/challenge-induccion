import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  return (
    <div>
        
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
                        <input type="text" className='form-control' placeholder='Enter your name' />
                    </div>
                    <div className='form-group mt-2'>
                        <p>
                            Email<span className='text-danger'>*</span>
                        </p>
                        <input type="email" className='form-control' placeholder='Enter your email adress' />
                    </div>
                    <div className='form-group mt-3'>
                        <p>
                            Password<span className='text-danger'>*</span>
                        </p>
                        <input type="password" className='form-control' placeholder='Enter your password' />
                    </div>
                    <div className='form-group mt-4'>
                        <button className='btn btn-primary w-100'>
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
