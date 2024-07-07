import React from "react";
import { FaReact, FaNodeJs, FaDocker, FaPython, FaJava, FaGit } from "react-icons/fa";
import { DiJavascript1, DiCss3, DiHtml5, DiMongodb, DiMysql } from "react-icons/di";
import { SiJenkins } from "react-icons/si";
import '../Styles/Education.css';

const icons = [
    { component: DiJavascript1, name: "JavaScript" },
    { component: FaJava, name: "Java" },
    { component: FaPython, name: "Python" },
    { component: FaReact, name: "React" },
    { component: DiHtml5, name: "HTML" },
    { component: DiCss3, name: "CSS" },
    { component: FaNodeJs, name: "Node.js" },
    { component: FaGit, name: "Git" },
    { component: FaDocker, name: "Docker" },
    { component: SiJenkins, name: "Jenkins" },
    { component: DiMongodb, name: "MongoDB" },
    { component: DiMysql, name: "MySQL" },
];

const Education = ({ translations }) => {
    // Split icons array into two arrays for two rows
    const iconsRow1 = icons.slice(0, 6); // First 6 icons
    const iconsRow2 = icons.slice(6);   // Remaining icons

    return (
        <div>
            <h3 className="education-header">{translations.educationHeader}</h3>
            <h2 className="code-header">{translations.codeEducation}</h2>
            <div className="code-container">
                <div className="icon-row">
                    {iconsRow1.map((icon, index) => (
                        <div key={index} className="icon-container">
                            <icon.component className="icon"/>
                            <span className="icon-name">{icon.name}</span>
                        </div>
                    ))}
                </div>
                <div className="icon-row">
                    {iconsRow2.map((icon, index) => (
                        <div key={index} className="icon-container">
                            <icon.component className="icon"/>
                            <span className="icon-name">{icon.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <h2 className="degree-header">{translations.degreeHeader}</h2>

            <div className="degree-container">
                <div className="degree-box">
                    <img src={`./Metropolialogo.png`} alt="Degree Image" className="degree-image-metropolia"/>
                    <h3 className="degree-title-metropolia">{translations.degreeTitleMetropolia}</h3>
                    <p className="degree-text">2022 - 2026</p>
                </div>
                <div className="degree-box">
                    <img src={`./Omnialogo.png`} alt="Degree Image" className="degree-image-omnia"/>
                    <h3 className="degree-title-omnia">{translations.degreeTitleOmnia}</h3>
                    <p className="degree-text">2015 - 2018</p>
                </div>
            </div>
        </div>
    );
};

export default Education;
