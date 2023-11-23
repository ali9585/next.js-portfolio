import React from 'react';
import LeftSidebar from '@/app/partials/leftSidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Resume from './components/resume';
import Services from './components/services';
import Skills from './components/skills';
import Portfolio from './components/portfolio';

export const Page: React.FC = (): JSX.Element => {
    return (
        <>
            <div className='left-sidebar-wrapper'>
                <LeftSidebar />
            </div>
            <div className='centered-sidebar-wrapper'>
                <LeftSidebar />
            </div>
            <div className='main'>
                <div className='content'>
                    <Introduction />
                    <About />
                    <Resume />
                    <Services />
                    <Skills />
                    <Portfolio />
                </div>
            </div>
        </>
    );
}