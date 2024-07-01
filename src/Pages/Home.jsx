import Navbar from "../Components/Navbar.jsx";
import { Element } from 'react-scroll';
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Project from "./Project.jsx";
import Certificate from "./Certificate.jsx";
import '../Styles/Home.css';  // Import the CSS file

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className="home-intro">
                <h1>Agrin Sadon</h1>
                <hr />
                <h2>Software Engineer Student</h2>
            </div>

            <Element name="about"> <About /> </Element>
            <Element name="experience"> <Experience /> </Element>
            <Element name="projektit"> <Project /> </Element>
            <Element name="certificates"> <Certificate /> </Element>
        </div>
    );
};

export default Home;
