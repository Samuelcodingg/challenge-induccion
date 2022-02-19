import React from 'react';

import simpleProject from './img/simple-project.png';
import iconNormal from './img/icon-normal-div.png';

export const SolutionSection = () => {
    return (
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
                <div className='row pb-4'>
                    <div className='col-md-6 order-2 order-md-1'>
                        <h3 className='fw-700'>
                            Powerful suite of tools
                        </h3>
                        <p className='text-secondary'>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                        </p>

                        <div className='shadow rounded p-3 d-flex justify-content-between align-items-center mt-4 bg-white hover-bg'>
                            <div>
                                <h4 className='fw-700'>Building the Simple ecosystem</h4>
                                <p className='text-secondary mb-0'>
                                    Take collaboration to the next level with security and administrative features built for teams.
                                </p>
                            </div>
                            <div>
                                <img src={iconNormal} alt='icon-normal' className='img-fluid hover-rotate' />
                            </div>
                        </div>
                        <div className='shadow rounded p-3 d-flex justify-content-between align-items-center mt-4 bg-white hover-bg'>
                            <div>
                                <h4 className='fw-700'>Building the Simple ecosystem</h4>
                                <p className='text-secondary mb-0'>
                                    Take collaboration to the next level with security and administrative features built for teams.
                                </p>
                            </div>
                            <div>
                                <img src={iconNormal} alt='icon-normal' className='img-fluid hover-rotate' />
                            </div>
                        </div>
                        <div className='shadow rounded p-3 d-flex justify-content-between align-items-center mt-4 bg-white hover-bg'>
                            <div>
                                <h4 className='fw-700'>Building the Simple ecosystem</h4>
                                <p className='text-secondary mb-0'>
                                    Take collaboration to the next level with security and administrative features built for teams.
                                </p>
                            </div>
                            <div>
                                <img src={iconNormal} alt='icon-normal' className='img-fluid hover-rotate' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 order-1 order-md-2 mx-auto'>
                        <img src={simpleProject} alt='simple-project' className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}
