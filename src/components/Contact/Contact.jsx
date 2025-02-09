import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaDribbble, FaMedium } from "react-icons/fa";
import './Contact.css'
const Contact = () => {
    const handleGmailClick = () => {
        const email = 'vyydesigns@gmail.com';
        const subject = 'Send me a note';
        const body = 'Hello,';
        // window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, '_blank');
    };

    const contactVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    };

    const socialVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    return (
        <motion.section
            id="contact"
            className="footer-section"
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.div className="contact-left">
                <motion.h2>Let's work together</motion.h2>
                <motion.p>
                    Reach out anytime to discuss a collaboration or just to connect with in person!
                </motion.p>
                <motion.button
                    className="gradient-button"
                    onClick={handleGmailClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Send me a note <FaArrowRight className="arrow-icon" />
                </motion.button>
            </motion.div>
            <motion.div
                className="contact-right"
                variants={socialVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.span>Find me in socials</motion.span>
                <motion.div className='contact-right-main'>
                    <motion.div variants={socialVariants}>
                        <NavLink to="https://www.linkedin.com/in/vyshakhcr" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <TiSocialLinkedin size={30} />
                        </NavLink>
                    </motion.div>
                    <motion.div variants={socialVariants}>
                        <NavLink to="#" aria-label="Dribbble" target="_self" rel="noopener noreferrer">
                            <FaDribbble size={24} />
                        </NavLink>
                    </motion.div>
                    <motion.div variants={socialVariants}>
                        <NavLink to="https://medium.com/@vyydesigns" aria-label="Medium" target="_blank" rel="noopener noreferrer">
                            <FaMedium size={24} />
                        </NavLink>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Contact;