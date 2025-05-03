// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Experience.css';
import ScrollAnimation from '../../Components/ScrollAnimation';

// eslint-disable-next-line react/prop-types
const Experience = ({ translations }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedBox = translations.experienceBoxes[selectedIndex];

    return (
        <div className="page-content">
            <h2 className="container-header">{translations.experienceHeader}</h2>
            <div className="experience-wrapper">
                <div className="experience-sidebar">
                    {translations.experienceBoxes.map((box, index) => (
                        <button
                            key={index}
                            className={`experience-tab ${selectedIndex === index ? 'active' : ''}`}
                            onClick={() => setSelectedIndex(index)}
                        >
                            {box.company.toUpperCase()}
                        </button>
                    ))}
                </div>

                <div className="experience-details">
                    <h1 className="box-title">{selectedBox.title}</h1>
                    <p className="box-date">{selectedBox.date}</p>
                    <ScrollAnimation key={selectedBox.text}>
                        <p className="box-text">{selectedBox.text}</p>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default Experience;
