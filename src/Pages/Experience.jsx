// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../Styles/Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';


const boxes = [
    { icon: faUser, header: 'ZÄÄÄT', text: 'ZÄÄÄT' },
    { icon: faUser, header: 'ZÄÄÄT', text: 'ZÄÄÄT' },
    { icon: faUser, header: 'ZÄÄÄT', text: 'ZÄÄÄT' },
    { icon: faUser, header: 'ZÄÄÄT', text: 'ZÄÄÄT' },
    { icon: faUser, header: 'ZÄÄÄT', text: 'ZÄÄÄT' },
    { icon: faUser, header: 'ZÄÄÄT', text: 'ZÄÄÄT' },
    { icon: faUser, header: 'ZÄÄÄT', text: 'ZÄÄÄT' },
];

// eslint-disable-next-line react/prop-types
const Experience = ({ translations }) => {
    return (
        <div>
            <h3 className="experience-header">{translations.experienceHeader}</h3>
            <h1 className="service-header">{translations.experienceTitle}</h1>
                <div className="container">
                    {boxes.map((box, index) => (
                        <div className="box" key={index}>
                            <FontAwesomeIcon icon={box.icon} size="2x"/>
                            <h3>{box.header}</h3>
                            <p>{box.text}</p>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Experience;
