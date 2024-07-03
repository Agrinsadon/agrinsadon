// eslint-disable-next-line no-unused-vars
import React from "react";
import '../Styles/Project.css';



// eslint-disable-next-line react/prop-types
const Project = ({ translations }) => {
    return (
        <div>
            <h3 className="project-header">{translations.projectHeader}</h3>
        </div>
    );
};

export default Project;
