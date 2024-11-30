import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom'; // Import NavLink
import logo from "../../assets/Vyy..png";
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navVariants = {
        hidden: { opacity: 0, y: 70 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const logoVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2
            }
        }
    };

    const handleSmoothScroll = (id) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <motion.nav
            className="navbar"
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="navbar-content">
                <motion.div
                    className="navbar-logo"
                    variants={logoVariants}
                >
                    <img src={logo} alt="Logo" className="logo-image" />
                </motion.div>
                <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className="menu-icon"></div>
                </div>
                <motion.div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    {['Home', 'Expertise', 'Projects', 'Contact'].map((link) => (
                        <NavLink
                            key={link}
                            to={`#${link.toLowerCase()}`}
                            activeClassName="active"
                            onClick={() => handleSmoothScroll(link)}
                        >
                            {link}
                        </NavLink>
                    ))}
                </motion.div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
