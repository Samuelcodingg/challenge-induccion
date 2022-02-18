import React from 'react';

import logosCompanies from './img/logos-companies.png';
import ceo from './img/ceo.png';

export const PartnersSection = () => {
    return (
        <div className='my-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mx-auto text-center'>
                        <h1 className='fw-800'>
                            Trusted by over 20,000 companies all over the world
                        </h1>
                        <p className='text-secondary'>
                            Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis
                            blandit libero cursus mattis.
                        </p>

                    </div>
                    <div className='col-md-7 mx-auto text-center mt-4'>
                        <img src={logosCompanies} alt='logos-companies' className='img-fluid' />
                    </div>
                </div>
            </div>
            <div className='bg-shapes'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 mx-auto mt-5'>
                            <div className='shadow rounded p-4 text-center'>
                                <div>
                                    <img src={ceo} alt='ceo' className='ceo-size' />
                                </div>
                                <p>
                                    “ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                                </p>
                                <h5 className='fw-700'>
                                    Darya Finger
                                </h5>
                                <p className='text-secondary'>
                                    CEO & Co-Founder <span className='text-primary'>@Dropbox</span>
                                </p>
                            </div>
                        </div>
                        <div className='bg-contact py-5 px-3 mt-5 rounded'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-7'>
                                        <h3 className='text-white fw-700'>
                                            Powering your business
                                        </h3>
                                        <p className='color-grey fw-400'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.
                                        </p>
                                        <div className='row'>
                                            <div className='col-md-7'>
                                                <input type='email' className='form-control bg-333 border-0 border-4c' placeholder='Your email' />
                                            </div>
                                            <div className='col-md-5 mt-4 mt-md-0'>
                                                <button className='btn btn-primary btn-block w-100-responsive'>
                                                    Start free trial
                                                </button>
                                            </div>
                                        </div>
                                        <p className='mt-4 color-grey'>
                                            7 days free trial. No credit card required.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
