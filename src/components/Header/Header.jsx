import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from "../../assets/Container.png";
import "./Header.css";

const Header = () => {
    const formatHeadingText = useCallback((text) => {
        return text.split('').map((char, index) =>
            char.toLowerCase() === 'i' ? (
                <motion.span
                    key={index}
                    className="special-i"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {char}
                </motion.span>
            ) : (
                char
            )
        );
    }, []);

    const headerVariants = {
        hidden: { opacity: 0, y: 30 }, // 30% bottom-to-top effect
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // const navbarVariants = {
    //     hidden: { opacity: 0, y: -20 },
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             duration: 0.8,
    //             delay: 0.3, // Add delay for staggered animation
    //             ease: "easeOut"
    //         }
    //     }
    // };

    return (
        <div className="header-container">
            <motion.header
                className="header"
                style={{ backgroundImage: `url(${backgroundImage})` }}
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                id='Home'
            >
                <motion.div className="header-content">
                    <motion.h1>
                        <motion.div
                            className="left-align"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            {formatHeadingText("Building")}
                        </motion.div>
                        <motion.div
                            className="right-align"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            {formatHeadingText("your vision")}
                        </motion.div>
                        <motion.div
                            className="left-align"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            {formatHeadingText("into reality")}
                        </motion.div>
                    </motion.h1>
                </motion.div>

                <motion.div className="hero-bottom-content">
                    <motion.div
                        className="hero-bottom-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <motion.p>[ DIGITAL EXPERIENCE AND INTERFACE DESIGNER ]</motion.p>
                    </motion.div>
                    <motion.div
                        className="hero-bottom-right"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <motion.p>
                            Currently I'm in <span className='hero-gradient-text'>Kochi, India</span>, working as <span className='hero-gradient-text'>Senior UX Designer</span> at Lanware Solutions
                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.header>
        </div>
    );
};

export default Header;
