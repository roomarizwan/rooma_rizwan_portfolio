import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Projects.scss';
import { urlFor, client } from '../../client';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const query = '*[_type == "projects"]';

        client.fetch(query).then((data) => {
            setProjects(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text"><span>Projects</span></h2>

            <div className="app__projects-profile">
                {projects.map((project, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__project-profile-item"
                        key={project.title + index}
                    >
                        <h2 className="bold-text">Project {index + 1}: {project.title}</h2>
                        <p className="p-text">{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Projects, 'app__projects'),
    'project',
    'app__whitebg'
);