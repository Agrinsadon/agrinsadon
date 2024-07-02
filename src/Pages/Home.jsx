import { useState } from 'react';
import { Element } from 'react-scroll';
import Navbar from "../Components/Navbar.jsx";
import '../Styles/Home.css';
import fiTranslations from '../Translation/FIN.json';
import { FaGithub, FaEnvelope, FaInstagram, FaFileAlt } from 'react-icons/fa';
import About from "./About.jsx";

const Home = () => {
    const [translations, setTranslations] = useState(fiTranslations);

    return (
        <div>
            <Navbar onTranslationsChange={setTranslations} />

            <div className="home-intro">
                <h1>Agrin Sadon</h1>
                <hr />
                <h2>{translations.title}</h2>
                <div className="icon-container">
                    <a href="https://github.com/agrinsadon" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon"/>
                    </a>
                    <a href="https://www.instagram.com/agrin.sadon" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon"/>
                    </a>
                    <a href="mailto:sadon.code@gmail.com">
                        <FaEnvelope className="icon"/>
                    </a>
                    <a href="/AgrinCV.pdf" target="_blank" rel="noopener noreferrer">
                        <FaFileAlt className="icon"/>
                    </a>
                </div>
            </div>
            <Element name="about"> <About translations={translations} /> </Element>
        </div>
    );
};

export default Home;
