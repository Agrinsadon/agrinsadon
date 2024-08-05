// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import ReactGA from 'react-ga'; // Import the react-ga library
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Project from './Pages/Project';
import ScrollAnimation from './Components/ScrollAnimation';
import fiTranslations from './Translation/FIN.json';

const App = () => {
    const [translations, setTranslations] = useState(fiTranslations);

    useEffect(() => {
        ReactGA.initialize('G-V3ED2G6G27');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    useEffect(() => {
        const handleRouteChange = () => {
            ReactGA.pageview(window.location.pathname + window.location.search);
        };

        window.addEventListener('popstate', handleRouteChange);
        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    return (
        <>
            <Home onTranslationsChange={setTranslations} />

            <Element name="about" className="AboutMe">
                <ScrollAnimation>
                    <About translations={translations} />
                </ScrollAnimation>
            </Element>

            <Element name="experience" className="Experience">
                <ScrollAnimation>
                    <Experience translations={translations} />
                </ScrollAnimation>
            </Element>

            <Element name="projects" className="Projects">
                <ScrollAnimation>
                    <Project translations={translations} />
                </ScrollAnimation>
            </Element>

            <Element name="education" className="Education">
                <ScrollAnimation>
                    <Education translations={translations} />
                </ScrollAnimation>
            </Element>
        </>
    );
};

export default App;
