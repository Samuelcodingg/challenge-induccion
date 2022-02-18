import React from 'react';
import { Navbar } from '../ui/Navbar';
import { HowSection } from './HowSection';
import { LandingFirst } from './LandingFirst';
import { SolutionSection } from './SolutionSection';


export const HomePage = () => {
  return (
    <div>
        <Navbar />

        <LandingFirst />

        <SolutionSection />
        
        <HowSection />
    </div>
  )
}
