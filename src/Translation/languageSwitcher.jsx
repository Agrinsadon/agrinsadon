// LanguageSwitcher.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { hasFlag } from 'country-flag-icons';
import enTranslations from '../Translation/ENG.json';
import fiTranslations from '../Translation/FIN.json';

const getFlag = (countryCode) => {
    if (hasFlag(countryCode)) {
        return <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`} alt={`${countryCode} flag`} className="language-flag" />;
    }
    return null;
};

// eslint-disable-next-line react/prop-types
const LanguageSwitcher = ({ currentLanguage, setCurrentLanguage, setTranslations }) => {
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [languageArrowRotation, setLanguageArrowRotation] = useState(0);

    const toggleLanguageDropdown = () => {
        setShowLanguageDropdown(!showLanguageDropdown);
        setLanguageArrowRotation(languageArrowRotation === 0 ? 180 : 0);
    };

    const switchLanguage = (language) => {
        setCurrentLanguage(language);
        setShowLanguageDropdown(false);
        setLanguageArrowRotation(0);

        if (language === 'US') {
            setTranslations(enTranslations);
        } else if (language === 'FI') {
            setTranslations(fiTranslations);
        }
    };

    return (
        <div className="language-selector">
            {getFlag(currentLanguage)}
            <FontAwesomeIcon
                className="arrowlanguage"
                icon={faChevronDown}
                style={{ transform: `rotate(${languageArrowRotation}deg)`, transition: 'transform 0.3s ease-in-out' }}
                onClick={toggleLanguageDropdown}
            />
            <div className={`language-dropdown ${showLanguageDropdown ? 'show' : ''}`}>
                {currentLanguage !== 'US' && (
                    <div className="language-option" onClick={() => switchLanguage('US')}>
                        {getFlag('US')}
                    </div>
                )}
                {currentLanguage !== 'FI' && (
                    <div className="language-option" onClick={() => switchLanguage('FI')}>
                        {getFlag('FI')}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
