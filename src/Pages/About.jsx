// About.jsx
import React from 'react';
import '../Styles/About.css';

const About = ({ translations }) => {
    return (
        <div>
            <h3 className="about-header">{translations.aboutHeader}</h3>
            <div className="about-container">
                <div className="image-container">
                    <img src={`/Profile-transformed.jpeg`} alt="Profile" className="profile-image"/>
                </div>
                <div className="text-container">
                    <h2 className="about-title">{translations.aboutTitle}</h2>
                    <p className="about-description">
                        {translations.aboutDescription}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
