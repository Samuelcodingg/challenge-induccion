import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className='mt-5'>
            <div className='container py-4 border border-start-0 border-end-0'>
                <div className='row text-center text-md-start'>
                    <div className='col-md-3'>
                        <div className='d-flex justify-content-center d-md-inline'>
                            <div className='logo mb-2'></div>
                        </div>
                        <p className='text-secondary'>Terms - Privacy Policy</p>
                    </div>
                    <div className='col-md-2'>
                        <h5 className='fw-700'>
                            Products
                        </h5>
                        <p className='text-secondary mb-2'>Web Studio</p>
                        <p className='text-secondary mb-2'>DynamicBox Flex</p>
                        <p className='text-secondary mb-2'>Programming Forms</p>
                        <p className='text-secondary mb-2'>Integrations</p>
                        <p className='text-secondary mb-2'>Command-Line</p>
                    </div>
                    <div className='col-md-2'>
                        <h5 className='fw-700'>
                            Resources
                        </h5>
                        <p className='text-secondary mb-2'>Documentation</p>
                        <p className='text-secondary mb-2'>Tutorials & Guides</p>
                        <p className='text-secondary mb-2'>Blog</p>
                        <p className='text-secondary mb-2'>Support Center</p>
                        <p className='text-secondary mb-2'>Partners</p>
                    </div>
                    <div className='col-md-2'>
                        <h5 className='fw-700'>
                            Company
                        </h5>
                        <p className='text-secondary mb-2'>Home</p>
                        <p className='text-secondary mb-2'>About us</p>
                        <p className='text-secondary mb-2'>Company values</p>
                        <p className='text-secondary mb-2'>Pricing</p>
                        <p className='text-secondary mb-2'>Privacy Policy</p>
                    </div>
                    <div className='col-md-3'>
                        <h5 className='fw-700'>
                            Subscribe
                        </h5>
                        <p className='text-secondary mb-2'>
                            Get the latest news and articles to your inbox every month.
                        </p>
                        <input type='email' className='form-control' placeholder='Your email' />
                        <button className='btn btn-primary btn-block w-100-responsive mt-4'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className='container my-4'>
                <div className='text-secondary text-center text-md-start'>
                    Made by <Link to={{ pathname: "https://samuelcodingg.netlify.app/" }} target={'_blank'}>Samuel Roman</Link>. All rights reserved.
                </div>
                
            </div>
        </footer>
    )
}
