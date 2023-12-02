'use client';

import React, { useEffect, useState } from 'react';
import Introduction from './components/introduction';
import About from './components/about';
import Resume from './components/resume';
import Services from './components/services';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Testimonial from './components/testimonial';
import Pricing from './components/pricing';
import Contact from './components/contact';
import { LeftSidebar } from '@/app/partialsComponents/leftSidebar';
import { RightSideBar } from '@/app/partialsComponents/rightSiderbar';
import { RightMenu } from '@/app/partialsComponents/rightMenu';
import { PageLoader } from '@/app/partialsComponents/pageLoader';

export const Page: React.FC = (): JSX.Element => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 100)

    }, [])

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
                    <Testimonial />
                    <Pricing />
                    <Contact />
                </div>
            </div>
            <RightSideBar />
            <RightMenu />
            <PageLoader isLoaded={isLoaded} />
        </>
    );
}