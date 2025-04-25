// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { formatDescription } from '../Components/formatText.jsx';
import '../Styles/Project.css';

// eslint-disable-next-line react/prop-types
const Project = ({ translations }) => {
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            <h3 className="project-header">{translations.projectHeader}</h3>
            {/* eslint-disable-next-line react/prop-types */}
            <h1 className="project-title">{translations.projectTitle}</h1>
            <div className="project-cards-container">
                {/* eslint-disable-next-line react/prop-types */}
                {translations.projectsCards.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-description">
                            {formatDescription(project.description)}
                        </p>
                        <div className="project-links">
                            {project.links.map((link, linkIndex) => (
                                <a key={linkIndex} href={link.href}>
                                    {link.icon === 'faGithub' ? <FontAwesomeIcon icon={faGithub} /> :
                                        link.icon === 'faYoutube' ? <FontAwesomeIcon icon={faYoutube} /> :
                                            link.icon === 'faExternalLinkAlt' ? <FontAwesomeIcon icon={faExternalLinkAlt} /> :
                                                null}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Project;