import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css'

const CustomCursor = ({ hoveringProject }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
    const requestRef = useRef();

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const smoothFollow = () => {
            // Create a smooth interpolation effect
            setDelayedPosition(prev => ({
                x: prev.x + (position.x - prev.x) * 0.1,
                y: prev.y + (position.y - prev.y) * 0.1
            }));

            // Continue the animation
            requestRef.current = requestAnimationFrame(smoothFollow);
        };

        // Start the smooth follow animation
        requestRef.current = requestAnimationFrame(smoothFollow);

        return () => cancelAnimationFrame(requestRef.current);
    }, [position]);
    if (hoveringProject) return null;
    return (
        <motion.div
            className="custom-cursor"
            style={{
                position: 'fixed',
                left: delayedPosition.x,
                top: delayedPosition.y,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                zIndex: 9999,
                width: '10px',
                height: '10px',
                mixBlendMode: 'difference'
            }}
            initial={{ scale: 1, opacity: 1 }}
            animate={{
                scale: 1,
                opacity: 1,
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                }
            }}
        >
            <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                // border: '2px solid transparent',
                background: 'linear-gradient(90deg, #CE9FFC, #7367F0)',
                boxShadow: '0 0 10px rgba(128, 0, 128, 0.5)'
            }} />
        </motion.div>
    );
};

export default CustomCursor;