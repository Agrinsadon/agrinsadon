import React, { useState } from 'react';
import Navbar from "../../Components/Navbar.jsx";
import fiTranslations from '../../Translation/FIN.json';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import PalmTree from '../../Components/PalmTree.jsx'; // No changes needed here
import './Home.css';

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
          <PalmTree />
        <div className="home-title">  
        <h1>{translations.title}</h1>
        </div>
        <div className="home-description">
            <h2>{translations.subtitle}</h2>
            </div>
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
