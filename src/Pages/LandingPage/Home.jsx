// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Navbar from "../../Components/Navbar.jsx";
import './Home.css';
import fiTranslations from '../../Translation/FIN.json';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const Home = ({ onTranslationsChange }) => {
    const [translations, setTranslations] = useState(fiTranslations);

    const handleTranslationsChange = (newTranslations) => {
        setTranslations(newTranslations);
        onTranslationsChange(newTranslations);
    };

    return (
        <>
            <Navbar onTranslationsChange={handleTranslationsChange} />

            <div className="LandingPage">
                <h1>Agrin Sadon</h1>
                <hr />
                <h2>{translations.title}</h2>
                <div className="home-icon-container">
                    <a href="https://github.com/agrinsadon" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="home-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/agrin-sadon-25724a265" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="home-icon"/>
                    </a>
                    <a href="mailto:sadon.code@gmail.com">
                        <FaEnvelope className="home-icon"/>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home;
