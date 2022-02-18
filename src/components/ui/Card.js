import React from 'react';

export const Card = ({ icon, title, text }) => {
    return (

        <div className='bg-white p-3 text-center shadow rounded'>
            <img src={icon} alt={title} className='img-fluid mb-2' />
            <h5 className='fw-700'>{title}</h5>
            <p className='text-secondary'>
                {text}
            </p>
        </div>
    )
}
