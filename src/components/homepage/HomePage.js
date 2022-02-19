import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import { Footer } from '../ui/Footer';
import { Navbar } from '../ui/Navbar';
import { HowSection } from './HowSection';
import { LandingFirst } from './LandingFirst';
import { PartnersSection } from './PartnersSection';
import { SolutionSection } from './SolutionSection';

export const HomePage = () => {

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 200,
      distance: '100px',
      duration: 800,
      easing: 'ease-in-out',
      interval: 200,
      opacity: 0,
      origin: 'bottom',
      reset: false,
      scale: 1,
      viewFactor: 0.2,
      });
  },[]); 

  return (
    <div>
        <Navbar />

        <div className='reveal'>
          <LandingFirst />
        </div>

        <div className='reveal'>
          <SolutionSection />
        </div>

        <div className='reveal'> 
          <HowSection />
        </div>

        <div className='reveal'> 
          <PartnersSection />
        </div>

        <Footer />
    </div>
  )
}
