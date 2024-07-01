import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBarsStaggered,
    faCoins,
    faPhoneFlip,
    faTimes,
    faUsers,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import { hasFlag } from 'country-flag-icons';
import '../Styles/Navbar.css';
import enTranslations from '../Translation/ENG.json';
import fiTranslations from '../Translation/FIN.json';

const getFlag = (countryCode) => {
    if (hasFlag(countryCode)) {
        return <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`} alt={`${countryCode} flag`} className="language-flag" />;
    }
    return null;
};

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('FI');
    const [translations, setTranslations] = useState(fiTranslations);
    const [languageArrowRotation, setLanguageArrowRotation] = useState(0);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
        setShowLanguageDropdown(false);
    };

    const scrollToTop = () => {
        scroll.scrollToTop({
            smooth: true,
            duration: 500,
        });
    };

    const toggleLanguageDropdown = () => {
        setShowLanguageDropdown(!showLanguageDropdown);
        setLanguageArrowRotation(languageArrowRotation === 0 ? 180 : 0);
    };

    const switchLanguage = (language) => {
        setCurrentLanguage(language);
        setShowLanguageDropdown(false);
        setLanguageArrowRotation(0);

        // Load translations based on selected language
        if (language === 'US') {
            setTranslations(enTranslations);
        } else if (language === 'FI') {
            setTranslations(fiTranslations);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            if (window.innerWidth > 768) {
                setShowLinks(false);
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
                <div className="logo" onClick={scrollToTop}>
                    A . S
                </div>

                <div className={`nav-links ${showLinks ? 'show' : ''}`}>
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        onClick={() => setShowLinks(false)}
                        className={activeSection === 'about' ? 'active' : ''}
                        spy={true}
                        onSetActive={handleSetActive}
                        offset={screenWidth < 992 ? -130 : -150}
                    >
                        {translations.me}
                        <FontAwesomeIcon icon={faServicestack} className="fa-icon"/>
                    </ScrollLink>

                    <ScrollLink
                        to="experience"
                        smooth={true}
                        duration={500}
                        onClick={() => setShowLinks(false)}
                        className={activeSection === 'experience' ? 'active' : ''}
                        spy={true}
                        onSetActive={handleSetActive}
                        offset={screenWidth < 768 ? -100 : -240}
                    >
                        {translations.experience}
                        <FontAwesomeIcon icon={faCoins} className="fa-icon"/>
                    </ScrollLink>

                    <ScrollLink
                        to="projects"
                        smooth={true}
                        duration={500}
                        onClick={() => setShowLinks(false)}
                        className={activeSection === 'projects' ? 'active' : ''}
                        spy={true}
                        onSetActive={handleSetActive}
                        offset={screenWidth < 768 ? -110 : -134}
                    >
                        {translations.projects}
                        <FontAwesomeIcon icon={faUsers} className="fa-icon"/>
                    </ScrollLink>

                    <ScrollLink
                        to="certificates"
                        smooth={true}
                        duration={500}
                        onClick={() => setShowLinks(false)}
                        className={activeSection === 'certificates' ? 'active' : ''}
                        spy={true}
                        onSetActive={handleSetActive}
                        offset={screenWidth < 768 ? -110 : -160}
                    >
                        {translations.certificates}
                        <FontAwesomeIcon icon={faPhoneFlip} className="fa-icon"/>
                    </ScrollLink>

                    <div className="language-selector">
                        {getFlag(currentLanguage)}
                        <FontAwesomeIcon
                            className="arrowlanguage"
                            icon={faChevronDown}
                            style={{ transform: `rotate(${languageArrowRotation}deg)`, transition: 'transform 0.3s ease-in-out' }}
                            onClick={toggleLanguageDropdown}
                        />
                        <div className={`language-dropdown ${showLanguageDropdown ? 'show' : ''}`}>
                            {currentLanguage !== 'US' && (
                                <div className="language-option" onClick={() => switchLanguage('US')}>
                                    {getFlag('US')}
                                </div>
                            )}
                            {currentLanguage !== 'FI' && (
                                <div className="language-option" onClick={() => switchLanguage('FI')}>
                                    {getFlag('FI')}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <FontAwesomeIcon
                    icon={showLinks ? faTimes : faBarsStaggered}
                    className={`burger ${showLinks ? 'active' : ''}`}
                    onClick={toggleLinks}
                />
            </div>
        </div>
    );
};

export default Navbar;
