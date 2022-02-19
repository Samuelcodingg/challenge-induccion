import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {


  const handleScroll = () => {
    const navbar = document.getElementById('navbar');
    const divNavbar = document.getElementById('div-navbar');
    const btnSignup = document.getElementById('signup');
    const navbarHeight = navbar.offsetHeight;
    const scrollTop = window.pageYOffset;
    if (scrollTop > navbarHeight) {
        divNavbar.classList.add('bg-dark');
        btnSignup.classList.remove('btn-dark');
        btnSignup.classList.add('btn-primary');

    } else {
        divNavbar.classList.remove('bg-dark');
        btnSignup.classList.remove('btn-primary');
        btnSignup.classList.add('btn-dark');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (

    <div id='div-navbar' className='bg-dark fixed-top'>
      <nav className="container py-3 d-flex justify-content-between" id="navbar">
        <Link
          to="/"
        >
          <div className='logo '>

          </div>
        </Link>
        <div>
          <button className="btn btn-light me-4">Sign in</button>
          <button className="btn btn-dark" id='signup'>Sign up &#8594;</button>
        </div>
      </nav>
    </div>

  )
}
