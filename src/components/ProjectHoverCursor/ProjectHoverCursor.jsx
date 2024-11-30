import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ProjectCustomCursor = ({ hoveringProject }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHoveringProject, setIsHoveringProject] = useState(false);
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleProjectHover = (e) => {
            setIsHoveringProject(e.type === 'mouseenter');
        };

        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            card.addEventListener('mouseenter', handleProjectHover);
            card.addEventListener('mouseleave', handleProjectHover);
        });

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);

            projectCards.forEach(card => {
                card.removeEventListener('mouseenter', handleProjectHover);
                card.removeEventListener('mouseleave', handleProjectHover);
            });
        };
    }, [isHoveringProject]);
    if (!hoveringProject) return null;

    return (
        <motion.div
            ref={cursorRef}
            style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                zIndex: 9999,
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: '2px solid white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 1,
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                }
            }}
        >
            <div
                style={{
                    textAlign: 'center',
                    fontSize: '16px',
                    fontFamily: 'Gilroy-Medium',
                    background: 'linear-gradient(90deg, #CE9FFC, #7367F0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                View Project on Medium
            </div>
        </motion.div>
    )
};

export default ProjectCustomCursor;