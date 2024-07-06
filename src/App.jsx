import React, { useState } from 'react';
import { Element } from 'react-scroll';
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Project from './Pages/Project';
import ScrollAnimation from './Components/ScrollAnimation'; // Import ScrollAnimation component
import fiTranslations from './Translation/FIN.json';

const App = () => {
    const [translations, setTranslations] = useState(fiTranslations);

    return (
        <>
            <Home onTranslationsChange={setTranslations} />

            <Element name="about">
                <ScrollAnimation>
                    <About translations={translations} />
                </ScrollAnimation>
            </Element>

            <Element name="experience">
                <ScrollAnimation>
                    <Experience translations={translations} />
                </ScrollAnimation>
            </Element>

            <Element name="projects">
                <ScrollAnimation>
                    <Project translations={translations} />
                </ScrollAnimation>
            </Element>

            <Element name="education">
                <ScrollAnimation>
                    <Education translations={translations} />
                </ScrollAnimation>
            </Element>
        </>
    );
};

export default App;
