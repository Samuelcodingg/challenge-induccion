import React from 'react';
import { Card } from '../ui/Card';

import initial from './initial.png';
import discover from './discover.png';
import contracting from './contracting.png';
import prototyping from './prototyping.png';
import design from './design.png';
import develop from './develop.png';

export const HowSection = () => {
  return (
    <div>
        <div className='container py-5 mb-5'>
            <div className='row'>
                <div className='col-md-6 mx-auto text-center'>
                    <h1 className='fw-800'>How Simple works</h1>
                    <p className='text-secondary'>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
                    </p>
                </div>
            </div>
        </div>
        <div className='bg-dark'>
            <div className='container position-relative goup-100'>
                <div className='row'>
                    <div className='col-md-4 mt-4 mx-auto'>
                        <Card 
                            icon={initial}
                            title='Initial Contact'
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                    </div>
                    <div className='col-md-4 mt-4 mx-auto '>
                        <Card 
                            icon={discover}
                            title='Discovery Session'
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                    </div>
                    <div className='col-md-4 mt-4 mx-auto '>
                        <Card 
                            icon={contracting}
                            title='Contracting'
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                    </div>
                    <div className='col-md-4 mt-4 mx-auto '>
                        <Card 
                            icon={prototyping}
                            title='Fast Prototyping'
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                    </div>
                    <div className='col-md-4 mt-4 mx-auto '>
                        <Card 
                            icon={design}
                            title='Design Phase'
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                    </div>
                    <div className='col-md-4 mt-4 mx-auto '>
                        <Card 
                            icon={develop}
                            title='Develop & Launch'
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}
