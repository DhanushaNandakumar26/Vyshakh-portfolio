

import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Expertise from '../Expertise/Expertise';
import Projects from '../Projects/Projects';
import Collaborators from '../Collaborators/Collaborators';
import Contact from '../Contact/Contact';

const Home = ({ onHoverChange }) => {


  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <motion.div
      className="home-website"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <Header />

      <Expertise />
      <Projects onHoverChange={onHoverChange} />
      <Collaborators />
      <Contact />

    </motion.div>
  );
};

export default Home;
