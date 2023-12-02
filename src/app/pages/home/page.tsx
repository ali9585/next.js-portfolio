'use client';

import React, { useEffect, useState } from 'react';
import LeftSidebar from '@/app/partials/leftSidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Resume from './components/resume';
import Services from './components/services';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Testimonial from './components/testimonial';
import Pricing from './components/pricing';
import Contact from './components/contact';
import RightSideBar from '@/app/partials/rightSiderbar';
import RightMenu from '@/app/partials/rightMenu';
import { AnimatePresence, motion } from 'framer-motion';
import { UsePageLoaderVariants } from '@/app/framerVariants/pageLoader/useLoaderVariants';

export const Page: React.FC = (): JSX.Element => {
    const pageLoaderVariants = UsePageLoaderVariants();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 500)
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
            {/* <RightMenu /> */}
            <AnimatePresence mode='wait'>
                {!isLoaded &&
                    (
                        <motion.div variants={pageLoaderVariants.loaderVariants} exit='exit' className='loader'>
                            <iframe src="https://giphy.com/embed/3AMRa6DRUhMli" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bw-follow-back-3AMRa6DRUhMli">via GIPHY</a></p>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    );
}