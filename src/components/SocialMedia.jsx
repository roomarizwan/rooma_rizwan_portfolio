import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://github.com/roomarizwan"
                    target="_blank">
                    <FaGithub />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/roomarizwan/"
                    target="_blank">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia