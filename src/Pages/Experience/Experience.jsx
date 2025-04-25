
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Experience.css';

// eslint-disable-next-line react/prop-types
const Experience = ({ translations }) => {
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            <h3 className="experience-header">{translations.experienceHeader}</h3>
            {/* eslint-disable-next-line react/prop-types */}
            <h1 className="experience-title">{translations.experienceTitle}</h1>
            <div className="box-container">
                {/* eslint-disable-next-line react/prop-types */}
                {translations.experienceBoxes.map((box, index) => (
                    <div className="box" key={index}>
                        <h2 className="box-date">{box.date}</h2>
                        <h1 className="box-title">{box.title}</h1>
                        <h3 className="box-company">{box.company}</h3>
                        <p className="box-text">{box.text}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Experience;
