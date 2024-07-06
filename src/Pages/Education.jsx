// eslint-disable-next-line no-unused-vars
import React from "react";
import '../Styles/Education.css';



// eslint-disable-next-line react/prop-types
const Education = ({ translations }) => {
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            <h3 className="education-header">{translations.educationHeader}</h3>
            <br/><br/><br/><br/>
        </div>
    );
};

export default Education;
