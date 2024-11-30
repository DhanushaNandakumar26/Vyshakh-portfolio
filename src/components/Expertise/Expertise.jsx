import React from 'react';
import { motion } from 'framer-motion';
import './Expertise.css';
const Expertise = () => {
    const expertiseVariants = {
        hidden: { opacity: 0, y: 100 },
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

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <motion.section
            id="expertise"
            className="expertise-section"
            variants={expertiseVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.div className="expertise-header">
                <motion.h2>Discover my <span className='expertise-title'>expertise</span></motion.h2>
            </motion.div>
            <motion.div className="expertise-grid">
                {['Product Design', 'Visual Design', 'Design System', 'Motion Design'].map((expertise, index) => (
                    <motion.div
                        key={index}
                        className="expertise-item"
                        variants={itemVariants}
                    >
                        <motion.div className="expertise-content">
                            <motion.span>{expertise}</motion.span>
                        </motion.div>
                        <motion.div className="expertise-line"></motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Expertise;