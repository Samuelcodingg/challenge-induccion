import React from 'react';
import { Footer } from '../ui/Footer';

import { Navbar } from '../ui/Navbar';
import { HowSection } from './HowSection';
import { LandingFirst } from './LandingFirst';
import { PartnersSection } from './PartnersSection';
import { SolutionSection } from './SolutionSection';


export const HomePage = () => {
  return (
    <div>
        <Navbar />

        <LandingFirst />

        <SolutionSection />
        
        <HowSection />

        <PartnersSection />

        <Footer />
    </div>
  )
}
