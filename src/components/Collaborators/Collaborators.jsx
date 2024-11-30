import React from 'react';
import { motion } from 'framer-motion';
import collaborator1 from "../../assets/collaborator1.png";
import collaborator2 from "../../assets/collaborator2.png";
import collaborator3 from "../../assets/collaborator3.png";
import collaborator4 from "../../assets/collaborator4.png";
import collaborator5 from "../../assets/collaborator5.png";
import collaborator6 from "../../assets/collaborator6.png";
import './Collaborators.css'

const Collaborators = () => {
    const images = [
        collaborator1,
        collaborator2,
        collaborator3,
        collaborator4,
        collaborator5,
        collaborator6
    ];

    const collaboratorsVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const collaboratorItemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <motion.section
            id="collaborators"
            className="collaborators-section"
            variants={collaboratorsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="collaborators-header">
                <h2>Collaborators</h2>
            </div>
            <motion.div className="collaborators-grid">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="collaborator-card"
                        variants={collaboratorItemVariants}
                    >
                        <img
                            src={image}
                            alt={`Collaborator ${index + 1}`}
                            className="collaborator-logo"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Collaborators;