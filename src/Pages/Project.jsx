import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Project.css';

const Project = ({ translations }) => {
    return (
        <div>
            <h3 className="project-header">{translations.projectHeader}</h3>
            <h1 className="project-title">{translations.projectTitle}</h1>
            <div className="project-cards-container">
                {translations.projectsCards.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-description">{project.description}</p>
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
        </div>
    );
};

export default Project;
