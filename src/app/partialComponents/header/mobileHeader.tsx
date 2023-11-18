'use client';

import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import MenuIcon from '@/app/utils/menuIcon';
import { FaHome, FaLaptop } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa6";
import { IoMdCodeWorking } from "react-icons/io";
import { MdPermPhoneMsg, MdWorkspacePremium } from "react-icons/md";

const menuVariants: Variants = {
    initial: {
        clipPath: 'circle(30px at 40px 40px)',
        transition: {
            delay: 0.9
        }
    },
    show: {
        clipPath: 'circle(2200px at 40px 40px)',
        transition: {
            type: 'tween',
            duration: 1.4,
            delay: 0.1,
            ease: 'easeOut',
            when: 'beforeChildren',
        },
    }
}

const linkVariants: Variants = {
    initial: {
        y: 16,
        opacity: 0
    },
    show: ({ animateDelay }) => {
        return {
            y: 0,
            opacity: 1,
            transition: {
                delay: animateDelay
            }
        }
    },
    exit: ({ exitDelay }) => {
        return {
            y: 30,
            opacity: 0,
            transition: {
                type: 'tween',
                duration: 0.3,
                delay: exitDelay,
                ease: 'easeIn'
            }
        }
    }
}

const MobileHeader: React.FC = (): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const menuLinks = [
        {
            Icon: FaHome,
            label: 'Home',
            animateDelay: 0.3,
            exitDelay: 0.6
        },
        {
            Icon: FaRegAddressBook,
            label: 'About Me',
            animateDelay: 0.4,
            exitDelay: 0.5
        },
        {
            Icon: IoMdCodeWorking,
            label: 'Portfolio',
            animateDelay: 0.5,
            exitDelay: 0.4
        },
        {
            Icon: FaLaptop,
            label: 'Services',
            animateDelay: 0.6,
            exitDelay: 0.3
        },
        {
            Icon: MdWorkspacePremium,
            label: 'Experience',
            animateDelay: 0.7,
            exitDelay: 0.2
        },
        {
            Icon: MdPermPhoneMsg,
            label: 'Contact',
            animateDelay: 0.8,
            exitDelay: 0.1
        },
    ]

    const toggleMenu = (): void => {
        setIsActive(!isActive);
    }

    return (
        <>
            <div className='header mobile'>
                <div className={`icon-wrapper ${isActive ? 'active' : ''}`}>
                    <MenuIcon isActive={isActive} onClick={toggleMenu} />
                </div>
                <motion.div initial='initial' animate={isActive ? 'show' : 'initial'} variants={menuVariants} className='menu'>
                    <ul className='links'>
                        <AnimatePresence mode='wait'>
                            {isActive && (
                                <>
                                    {menuLinks.map(({ Icon, label, animateDelay, exitDelay }, index) => (
                                        <motion.li key={index} variants={linkVariants} initial="initial" animate="show" exit="exit" custom={{ animateDelay, exitDelay }} className="link">
                                            <Icon size={19} />
                                            {label}
                                        </motion.li>
                                    ))}
                                </>
                            )}
                        </AnimatePresence>
                    </ul>
                </motion.div>
            </div>
        </>
    )
}

export default MobileHeader;