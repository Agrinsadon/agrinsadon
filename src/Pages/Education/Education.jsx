import React, { useState } from "react";
import ScrollAnimation from '../../Components/ScrollAnimation';
import './Education.css';

const Education = ({ translations }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedBox = translations.certificates[selectedIndex];

    return (
        <div className="page-content">
            <h2 className="container-header">{translations.educationHeader}</h2>
            <h2 className="certificate-header">{translations.certificateHeader}</h2>

            <div className="experience-wrapper">
                <div className="experience-sidebar">
                    {translations.certificates.map((box, index) => (
                        <button
                            key={index}
                            className={`experience-tab ${selectedIndex === index ? 'active' : ''}`}
                            onClick={() => setSelectedIndex(index)}
                        >
                            {box.issuer.toUpperCase()}
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

            <h2 className="degree-header">{translations.degreeHeader}</h2>
            <div className="degree-container">
                <div className="degree-box">
                    <img src="./Metropolialogo.png" alt="Degree Image" className="degree-image-metropolia" />
                    <h3 className="degree-title-metropolia">{translations.degreeTitleMetropolia}</h3>
                    <p className="degree-text">2022 - {translations.soon}</p>
                </div>
                <div className="degree-box">
                    <img src="./Omnialogo.png" alt="Degree Image" className="degree-image-omnia" />
                    <h3 className="degree-title-omnia">{translations.degreeTitleOmnia}</h3>
                    <p className="degree-text">2015 - 2018</p>
                </div>
            </div>
        </div>
    );
};

export default Education;
