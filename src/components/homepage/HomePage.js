import React from 'react';
import { Navbar } from '../ui/Navbar';

import ilustration from './Illustration.png';

export const HomePage = () => {
  return (
    <div>
        <Navbar />

        <div className='mt-5 bg-shapes'>
            <div className="container">
                <div className="row">
                    <div className='col-md-6 mx-auto'>
                        <div>
                            <h1 className='fw-800 text-center display-4'>
                                Make your website <span className='gradient-color'>wonderful</span>
                            </h1>
                            <p className='text-center text-secondary'>
                                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                            </p>
                            <div className='text-center'>
                                <button className='btn btn-primary px-3 me-3'>
                                    Start free trial
                                </button>
                                <button className='btn btn-dark px-3'>
                                    Learn more
                                </button>
                            </div>
                            <div>
                                <img src={ilustration} alt='illustration' className='img-fluid' />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
