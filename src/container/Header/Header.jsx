import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

function Header() {
  return (
    <div className="app__header app__flex">

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span >👋🏻</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <span className="head-text" >Rooma </span>
              <p className="p-text">
                Software Developer with a focus on Full-Stack Development | Fostering Collaborator and Innovator in a Fast-Paced Environment | Critical Thinker and Problem Solver Mindset | Coding Enthusiast. <br /> <br />
              </p>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text" style={{ textTransform: 'none', textAlign: 'justify', fontWeight: 'lighter' }}>
              As a full-stack developer, I am passionate about designing interactive and responsive web and desktop applications. My expertise spans Java, C#, Asp.NET, JavaScript, React, SQL, PostgreSQL, HTML, CSS, Docker, and Git. I am a quick learner, continuously expanding my knowledge and skill set. As a team player, I am eager to collaborate with others in the creation of outstanding applications. In 2016, I delved into coding and web development by crafting a channel management system. Since then, I've had the privilege of creating software for various entities, ranging from a small software house in Pakistan to a major corporation in Germany. I am driven by the belief that software development can be diverse and inspiring. With a mission to explore the possibilities of software design and development, I engage in experiments and thoughtful expressions. Currently, my primary focus is building products for my portfolio while working as an employee at STULZ Digital Solutions. I find the most satisfaction in crafting software at the intersection of design and engineering, where aesthetics meet functionality.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg"></img>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div >

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.angular, images.java, images.html].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>

  )
}

export default AppWrap(Header, 'home');