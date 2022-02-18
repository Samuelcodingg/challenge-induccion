import React from 'react';
import { Navbar } from '../ui/Navbar';

import ilustration from './Illustration.png';
import simpleProject from './simple-project.png';
import iconNormal from './icon-normal-div.png';

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

        <div className='bg-2'>
            <div className='container'>
                <div className='row'>
                    <div className='text-center col-md-6 mx-auto my-4'>
                        <h1 className='fw-800'>
                            Explore the solutions
                        </h1>
                        <p className='text-secondary'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 order-2 order-md-1'>
                        <h3 className='fw-700'>
                            Powerful suite of tools
                        </h3>
                        <p className='text-secondary'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                        </p>

                        <div className='shadow p-3 d-flex justify-content-between align-items-center mt-4'>
                            <div>
                                <h4 className='fw-700'>Building the Simple ecosystem</h4>
                                <p className='text-secondary mb-0'>
                                Take collaboration to the next level with security and administrative features built for teams.
                                </p>
                            </div>
                            <div>
                                <img src={iconNormal} alt='icon-normal' className='img-fluid' />
                            </div>
                        </div>
                        <div className='shadow p-3 d-flex justify-content-between align-items-center mt-4'>
                            <div>
                                <h4 className='fw-700'>Building the Simple ecosystem</h4>
                                <p className='text-secondary mb-0'>
                                Take collaboration to the next level with security and administrative features built for teams.
                                </p>
                            </div>
                            <div>
                                <img src={iconNormal} alt='icon-normal' className='img-fluid' />
                            </div>
                        </div>
                        <div className='shadow p-3 d-flex justify-content-between align-items-center mt-4'>
                            <div>
                                <h4 className='fw-700'>Building the Simple ecosystem</h4>
                                <p className='text-secondary mb-0'>
                                Take collaboration to the next level with security and administrative features built for teams.
                                </p>
                            </div>
                            <div>
                                <img src={iconNormal} alt='icon-normal' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 order-1 order-md-2 mx-auto'>
                        <img src={simpleProject} alt='simple-project' className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
