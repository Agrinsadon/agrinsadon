import React from 'react';
import './About.css';

const About = ({translations}) => {
    const codeItems = [
        "React",
        "Python",
        "JavaScript",
        "Node.js",
        "TypeScript",
        "Golang",
    ];

    return (
        <>
            <div className="page-content">
                <h2 className="container-header">{translations.aboutHeader}</h2>
                <div className="container-aboutme">
                    <div className="text-container">
                        <p className="about-description">
                            {translations.aboutDescription}
                        </p>

                        {/* Tech grid */}
                        <div className="about-code-grid">
                            {codeItems.map((item, index) => (
                                <div key={index} className="about-code-item">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="image-container">
                        <img src={`/Profile-transformed.jpeg`} alt="Profile" className="profile-image" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
