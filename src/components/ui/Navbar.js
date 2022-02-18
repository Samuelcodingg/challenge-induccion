import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="container py-4 d-flex justify-content-between">
        <Link
            to="/"
        >
            <div className='logo '>
                
            </div>
        </Link>
        <div>
            <button className="btn btn-light me-4">Sign in</button>
            <button className="btn btn-dark">Sign up &#8594;</button>
        </div>
    </nav>
  )
}
