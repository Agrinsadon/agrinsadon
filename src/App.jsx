import { useState } from 'react';
import { Element } from 'react-scroll';
import Home from './Pages/Home';
import About from "./Pages/About.jsx";
import Education from "./Pages/Education.jsx";
import Experience from "./Pages/Experience.jsx";
import Project from "./Pages/Project.jsx";
import fiTranslations from './Translation/FIN.json';

const App = () => {
    const [translations, setTranslations] = useState(fiTranslations);

    return (
        <>
            <Home onTranslationsChange={setTranslations} />

            <Element name="about">
                <About translations={translations} />
            </Element>
            <Element name="experience">
                <Experience translations={translations} />
            </Element>
            <Element name="projects">
                <Project translations={translations} />
            </Element>
            <Element name="education">
                <Education translations={translations} />
            </Element>
        </>
    );
};

export default App;
