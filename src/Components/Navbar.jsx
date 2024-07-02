import { useState, useEffect } from 'react';
import { Link as ScrollLink, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBarsStaggered,
    faCoins,
    faPhoneFlip,
    faTimes,
    faUsers
} from '@fortawesome/free-solid-svg-icons';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Navbar.css';
import fiTranslations from '../Translation/FIN.json';
import LanguageSwitcher from '../Translation/languageSwitcher';

// eslint-disable-next-line react/prop-types
const Navbar = ({ onTranslationsChange }) => {
    const [showLinks, setShowLinks] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [currentLanguage, setCurrentLanguage] = useState('FI');
    const [translations, setTranslations] = useState(fiTranslations);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
        if (!showLinks) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const handleLinkClick = () => {
        setShowLinks(false);
        document.body.classList.remove('no-scroll');
    };

    const scrollToTop = () => {
        scroll.scrollToTop({
            smooth: true,
            duration: 500,
        });
    };

    useEffect(() => {
        onTranslationsChange(translations);
    }, [translations, onTranslationsChange]);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            if (window.innerWidth > 768) {
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
                <div className="logo" onClick={scrollToTop}>
                    A . S
                </div>

                <div className={`nav-links ${showLinks ? 'show' : ''}`}>
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        onClick={handleLinkClick}
                        className={activeSection === 'about' ? 'active' : ''}
                        spy={true}
                        onSetActive={handleSetActive}
                        offset={screenWidth < 992 ? -80 : -150}
                    >
                        {translations.me}
                        <FontAwesomeIcon icon={faServicestack} className="fa-icon"/>
                    </ScrollLink>

                    <ScrollLink
                        to="experience"
                        smooth={true}
                        duration={500}
                        onClick={handleLinkClick}
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
                        onClick={handleLinkClick}
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
                        onClick={handleLinkClick}
                        className={activeSection === 'certificates' ? 'active' : ''}
                        spy={true}
                        onSetActive={handleSetActive}
                        offset={screenWidth < 768 ? -110 : -160}
                    >
                        {translations.certificates}
                        <FontAwesomeIcon icon={faPhoneFlip} className="fa-icon"/>
                    </ScrollLink>

                    <LanguageSwitcher
                        currentLanguage={currentLanguage}
                        setCurrentLanguage={setCurrentLanguage}
                        setTranslations={setTranslations}
                    />
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
