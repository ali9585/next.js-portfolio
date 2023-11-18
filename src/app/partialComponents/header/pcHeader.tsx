'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { styles } from '../../../../public/assets/style/style';

const linkVariants: Variants = {
    initial: {
        color: styles.link.initial,
        scale: 1,
    },
    hover: {
        color: styles.link.hover,
        scale: 1.1,
        transition: {
            type: 'spring',
            mass: 0.5
        }
    }
}

const PcHeader: React.FC = (): JSX.Element => {
    const [currentSection, setCurrentSection] = useState<number>(0);

    return (
        <>
            <div className='flex justify-center'>
                <div className='header pc container'>
                    <div className='logo'>
                        <Image alt='' src={require('../../../../public/assets/images/my-logo.png')} />
                    </div>
                    <ul className='links'>
                        <motion.li variants={linkVariants} initial='inital' whileHover='hover' animate={currentSection === 0 ? 'hover' : ''} onClick={() => setCurrentSection(0)} className='link'>
                            Home
                        </motion.li>
                        <motion.li variants={linkVariants} initial='inital' whileHover='hover' animate={currentSection === 1 ? 'hover' : ''} onClick={() => setCurrentSection(1)} className='link'>
                            About Me
                        </motion.li>
                        <motion.li variants={linkVariants} initial='inital' whileHover='hover' animate={currentSection === 2 ? 'hover' : ''} onClick={() => setCurrentSection(2)} className='link'>
                            Portfolio
                        </motion.li>
                        <motion.li variants={linkVariants} initial='inital' whileHover='hover' animate={currentSection === 3 ? 'hover' : ''} onClick={() => setCurrentSection(3)} className='link'>
                            Services
                        </motion.li>
                        <motion.li variants={linkVariants} initial='inital' whileHover='hover' animate={currentSection === 4 ? 'hover' : ''} onClick={() => setCurrentSection(4)} className='link'>
                            Experience
                        </motion.li>
                        <li className='link app-btn'>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PcHeader;