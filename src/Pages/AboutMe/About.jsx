// eslint-disable-next-line no-unused-vars
import React from 'react';
import './About.css';

// eslint-disable-next-line react/prop-types
const About = ({ translations }) => {
    return (
        <>
            <div className="page-content"> {/* Added page-content class */}
            <h2 className="container-header">{translations.aboutHeader}</h2>
                <div className="image-container">
                    <img src={`/Profile-transformed.jpeg`} alt="Profile" className="profile-image"/>
                </div>
                <div className="text-container">
                    {/* eslint-disable-next-line react/prop-types */}
                    <h2 className="about-title">{translations.aboutTitle}</h2>
                    <p className="about-description">
                        {/* eslint-disable-next-line react/prop-types */}
                        {translations.aboutDescription}
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
