import React from 'react';
import Swal from 'sweetalert2';

import ilustration from './img/Illustration.png';
import about from './img/about.svg';
import bgShapes from './img/bg-shapes.png';


export const LandingFirst = () => {

    const showAbout = () => {
        Swal.fire({
            title: 'About us',
            text: 'Exercitation elit eiusmod tempor dolore deserunt proident cillum. Ullamco et ullamco nisi ad ut aliqua fugiat eiusmod aliqua. Officia proident id ullamco ad qui do laborum aliqua officia sit ex. Qui nostrud cupidatat dolor id. Mollit aute ex officia non consectetur do dolore nostrud magna. Laboris ad labore irure esse.',
            width: 1000,
            imageUrl: about,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
    }

    const showStart = () => {
        Swal.fire({
            html: `
                <div>
                    <div class="logo mx-auto">
                    
                    </div>
                    <h3 class="text-center">Validación del medio de pago</h3>
                    <form class="container">
                        <h4 class="text-start mt-3">Datos del titular</h4>
                        <div class="row">
                            <div class="col-md-6">
                                <p class="text-start">Nombre</p>
                                <input type="text" class="form-control" placeholder="Escriba su nombre">
                            </div>
                            <div class="col-md-6">
                                <p class="text-start">Apellido</p>
                                <input type="text" class="form-control" placeholder="Escriba su apellido">
                            </div>
                        </div>
                        <h4 class="text-start mt-3">Datos de la tarjeta</h4>
                        <div class="row">
                            <div class="col-md-12">
                                <p class="text-start">Número de tarjeta</p>
                                <input type="text" class="form-control" placeholder="Escriba su número de tarjeta">
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <p class="text-start">Fecha de vencimiento</p>
                                <input type="text" class="form-control" placeholder="Escriba su fecha de vencimiento">
                            </div>
                            <div class="col-md-6">
                                <p class="text-start">Código de seguridad</p>
                                <input type="text" class="form-control" placeholder="Escriba su código de seguridad">
                            </div>
                        </div>
                        <div class="text-start mt-3 d-flex align-items-center">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Acepto los términos y condiciones</label>
                        </div>
                    </form>
                </div>
            `,
            width: 800,
            background: `
                #fff url( ${bgShapes} )`
        });
    }

    return (
        <div className='mt-5 bg-shapes pt-5'>
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
                                <button 
                                    className='btn btn-primary px-3 me-3'
                                    onClick={showStart}    
                                >
                                    Start free trial
                                </button>
                                <button 
                                    className='btn btn-dark px-3'
                                    onClick={showAbout}
                                >
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
    )
}
