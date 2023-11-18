import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../../public/assets/style/style';

interface MenuIconProps {
    isActive: boolean;
    onClick: () => void;
}

const MenuIcon: React.FC<MenuIconProps> = (props: MenuIconProps): JSX.Element => {

    return (
        <>
            <motion.svg width="23" height="23" viewBox="0 0 23 23" onClick={props.onClick} initial={false} animate={{ rotate: props.isActive ? 90 : 0 }} transition={{ duration: 0.3 }}>
                <motion.path fill={styles.appBg} strokeWidth="3" stroke={styles.appBg} strokeLinecap="round" d={props.isActive ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"} />
                <motion.path fill={styles.appBg} strokeWidth="3" stroke={styles.appBg} strokeLinecap="round" d="M 2 9.423 L 20 9.423" opacity={props.isActive ? 0 : 1} />
                <motion.path fill={styles.appBg} strokeWidth="3" stroke={styles.appBg} strokeLinecap="round" d={props.isActive ? "M 3 2.5 L 17 16.5" : "M 2 16.5 L 20 16.5"} />
            </motion.svg>
        </>
    )
}

export default MenuIcon;