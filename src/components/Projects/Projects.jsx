import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FaPlay } from "react-icons/fa6";

import projectImage1 from "../../assets/project1.png";
import projectImage2 from "../../assets/project2.png";
import projectImage3 from "../../assets/project3.png";
import projectImage4 from "../../assets/project4.png";
import projectImage5 from "../../assets/project5.png";
import projectImage6 from "../../assets/project6.png";
import './Projects.css';

const Projects = ({ onHoverChange }) => {
    const projectsData = [
        { id: 1, name: "Otohom- A Home Automation and Security Application", description: "MOBILE APP DESIGN", image: projectImage1, link: "https://medium.com/@vyydesigns/the-journey-of-designing-a-home-automation-mobile-app-otohom-be-home-from-anywhere-anytime-2295df8f8d82" },
        { id: 2, name: "Autosmart HR Products- A Bundle", description: "WEB APP DESIGN", image: projectImage2, link: "https://medium.com/@vyydesigns/designing-redesigning-autosmarts-hr-products-ux-ui-case-study-5eb3f98d3ced" },
        { id: 3, name: "NOVA- Next Gen Onboarding Virtual Assistant", description: "No-code Development", image: projectImage3 },
        { id: 4, name: "Project Management System", description: "WEB APP", image: projectImage4 },
        { id: 5, name: "Transport Management System", description: "WEB APP", image: projectImage5 },
        { id: 6, name: "ApeOn- Launch your own token using blockchain", description: "Progressive app", image: projectImage6 },
    ];

    // const projectsVariants = {
    //     hidden: { opacity: 0, y: 100 },
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             duration: 0.8,
    //             staggerChildren: 0.3,
    //             delayChildren: 0.2
    //         }
    //     }
    // };

    const projectItemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <motion.section id="projects" className="projects-section">
            <div className="projects-header">
                <h2>Explore my <span className="projects-title">projects</span></h2>
            </div>
            <motion.div className="projects-grid">
                {projectsData.map((project) => (
                    project.link ? (
                        <NavLink
                            key={project.id}
                            to={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => onHoverChange(true)}
                            onMouseLeave={() => onHoverChange(false)}
                            className="navlink"
                        >
                            <motion.div className="project-card" variants={projectItemVariants}>
                                <img src={project.image} alt={project.name} />
                                <p><FaPlay />{project.description}</p>
                                <h3>{project.name}</h3>
                                <div className="underline"></div>
                            </motion.div>
                        </NavLink>
                    ) : (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            variants={projectItemVariants}
                        >
                            <img src={project.image} alt={project.name} />
                            <p><FaPlay />{project.description}</p>
                            <h3>{project.name}</h3>
                            <div className="underline"></div>
                        </motion.div>
                    )
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Projects;
