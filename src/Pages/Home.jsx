// Home.js
import { useState } from 'react';
import Navbar from "../Components/Navbar.jsx";
import '../Styles/Home.css';
import fiTranslations from '../Translation/FIN.json';

const Home = () => {
    const [translations, setTranslations] = useState(fiTranslations);

    return (
        <div>
            <Navbar onTranslationsChange={setTranslations} />

            <div className="home-intro">
                <h1>Agrin Sadon</h1>
                <hr />
                <h2>{translations.title}</h2>
            </div>

        </div>
    );
};

export default Home;
