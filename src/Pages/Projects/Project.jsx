// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import ImageCarousel from '../../Components/ImageCarousel';
import './Project.css';
import ScrollAnimation from "../../Components/ScrollAnimation";

// eslint-disable-next-line react/prop-types
const Project = ({ translations }) => {
    return (
        <div className="page-content-project">
            <h2 className="container-header">{translations.projectHeader}</h2>

            <ImageCarousel images={[
            "7autoo.png",
            "menstyle.png",
            "Ecoplug.png",
            "Tuutorikeskus.png",
            "Sahkodominus.png",
            "simulator.png"
            ]} projects={translations.projectsCards} />
               <ScrollAnimation>
            <div className="project-grid">
                {translations.projectsCards.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-header-container">
                            <FontAwesomeIcon icon={faFolder} className="folder-icon" />
                            <div className="project-links">
                                {project.links.map((link, linkIndex) => (
                                    <a key={linkIndex} href={link.href} target="_blank" rel="noopener noreferrer">
                                        {link.icon === 'faGithub' ? <FontAwesomeIcon icon={faGithub} /> :
                                         link.icon === 'faYoutube' ? <FontAwesomeIcon icon={faYoutube} /> :
                                         link.icon === 'faExternalLinkAlt' ? <FontAwesomeIcon icon={faExternalLinkAlt} /> :
                                         null}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            <p className="project-techstack">{project.techstack}</p>
                        </div>
                    </div>
                ))}
            </div>
            </ScrollAnimation>
        </div>
    );
};

export default Project;
