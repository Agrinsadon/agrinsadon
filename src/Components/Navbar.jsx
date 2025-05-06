import { useState, useEffect } from 'react';
import { Link as ScrollLink, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

import '../Styles/Navbar.css';
import fiTranslations from '../Translation/FIN.json';
import LanguageSwitcher from '../Translation/languageSwitcher';

const Navbar = ({ onTranslationsChange }) => {
    const [showLinks, setShowLinks] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [currentLanguage, setCurrentLanguage] = useState('FI');
    const [translations, setTranslations] = useState(fiTranslations);

    const handleLinkClick = () => {
        setShowLinks(false);
        setActiveSection('');
        document.body.classList.remove('no-scroll');
    };

    useEffect(() => {
        onTranslationsChange(translations);
    }, [translations, onTranslationsChange]);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            if (window.innerWidth > 600) {
                setShowLinks(false);
                document.body.classList.remove('no-scroll');
            }
        };

        window.addEventListener('resize', handleResize);

        Events.scrollEvent.register('begin', () => {});
        Events.scrollEvent.register('end', () => {});

        scrollSpy.update();

        return () => {
            window.removeEventListener('resize', handleResize);
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    return (
        <div className="screen">
            <div className="navbar">
                <div className="navbar-left">
                    <div className="logo">
                        <p>Agrin Sadon</p>
                    </div>
                    <div className={`nav-links ${showLinks ? 'show' : ''}`}>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            onClick={(e) => {
                                handleLinkClick();
                                e.currentTarget.blur(); // removes focus state after click
                            }}
                            className={activeSection === 'about' ? 'active' : ''}
                            spy={true}
                            onSetActive={handleSetActive}
                            offset={screenWidth < 992 ? -80 : -45}
                        >
                            {translations.me}
                        </ScrollLink>

                        <ScrollLink
                            to="experience"
                            smooth={true}
                            duration={500}
                            onClick={(e) => {
                                handleLinkClick();
                                e.currentTarget.blur(); // removes focus state after click
                            }}
                            className={activeSection === 'experience' ? 'active' : ''}
                            spy={true}
                            onSetActive={handleSetActive}
                            offset={screenWidth < 768 ? -80 : -50}
                        >
                            {translations.experience}
                        </ScrollLink>

                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            onClick={(e) => {
                                handleLinkClick();
                                e.currentTarget.blur(); // removes focus state after click
                            }}                            
                            className={activeSection === 'projects' ? 'active' : ''}
                            spy={true}
                            onSetActive={handleSetActive}
                            offset={screenWidth < 768 ? 150 : 65}
                        >
                            {translations.projects}
                        </ScrollLink>

                        <ScrollLink
                            to="education"
                            smooth={true}
                            duration={500}
                            onClick={(e) => {
                                handleLinkClick();
                                e.currentTarget.blur(); // removes focus state after click
                            }}                            
                            className={activeSection === 'education' ? 'active' : ''}
                            spy={true}
                            onSetActive={handleSetActive}
                            offset={screenWidth < 768 ? -80 : -50}
                        >
                            {translations.education}
                        </ScrollLink>
                    </div>
                </div>

                <div className="navbar-right">
                    <div className="icon-container-navbar">
                        <a href="https://github.com/agrinsadon" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="home-icon-navbar"/>
                        </a>
                        <a href="https://www.linkedin.com/in/agrin-sadon-25724a265" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="home-icon-navbar"/>
                        </a>
                        <a href="mailto:sadon.code@gmail.com">
                        <FaEnvelope className="home-icon-navbar"/>
                        </a>
                    </div>
                    <LanguageSwitcher
                        currentLanguage={currentLanguage}
                        setCurrentLanguage={setCurrentLanguage}
                        setTranslations={setTranslations}
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
