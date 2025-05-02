// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { Element } from 'react-scroll';
import Home from './Pages/LandingPage/Home';
import About from './Pages/AboutMe/About';
import Education from './Pages/Education/Education';
import Experience from './Pages/Experience/Experience';
import Project from './Pages/Projects/Project';
import ScrollAnimation from './Components/ScrollAnimation';
import fiTranslations from './Translation/FIN.json';

const App = () => {
    const [translations, setTranslations] = useState(fiTranslations);

    return (
        <>
            <Home onTranslationsChange={setTranslations} />

            <Element name="about" className="AboutMe">
                <ScrollAnimation>
                    <About translations={translations} />
                </ScrollAnimation>
            </Element>

            <Element name="experience" className="Experience">
                    <Experience translations={translations} />
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

            <Analytics />
        </>
    );
};

export default App;
