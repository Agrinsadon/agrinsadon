import React, { useState, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { hasFlag } from 'country-flag-icons';

const loadTranslations = async (language) => {
    if (language === 'FI') {
        return import('../Translation/FIN.json');
    } else if (language === 'US') {
        return import('../Translation/ENG.json');
    }
};

const getFlag = (countryCode) => {
    if (hasFlag(countryCode)) {
        return <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`} alt={`${countryCode} flag`} className="language-flag" />;
    }
    return null;
};

const LanguageOption = React.memo(({ countryCode, onClick }) => (
    <div className="language-option" onClick={onClick}>
        {getFlag(countryCode)}
    </div>
));

const LanguageSwitcher = ({ currentLanguage, setCurrentLanguage, setTranslations }) => {
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [languageArrowRotation, setLanguageArrowRotation] = useState(0);
    const [refreshKey, setRefreshKey] = useState(0); // State to simulate refresh

    const toggleLanguageDropdown = useCallback(() => {
        setShowLanguageDropdown(prev => !prev);
        setLanguageArrowRotation(prev => (prev === 0 ? 180 : 0));
    }, []);

    const switchLanguage = useCallback(async (language) => {
        setCurrentLanguage(language);
        localStorage.setItem('selectedLanguage', language);
        setShowLanguageDropdown(false);
        setLanguageArrowRotation(0);

        const translations = await loadTranslations(language);
        setTranslations(translations.default);

        // Simulate a refresh effect by updating the key
        setRefreshKey(prevKey => prevKey + 1);
    }, [setCurrentLanguage, setTranslations]);

    useEffect(() => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        if (storedLanguage) {
            switchLanguage(storedLanguage);
        } else {
            switchLanguage('FI');
        }
    }, [switchLanguage]);

    return (
        <div key={refreshKey} className="language-selector">
            {getFlag(currentLanguage)}
            <FontAwesomeIcon
                className="arrowlanguage"
                icon={faChevronDown}
                style={{ transform: `rotate(${languageArrowRotation}deg)`, transition: 'transform 0.3s ease-in-out' }}
                onClick={toggleLanguageDropdown}
            />
            <div className={`language-dropdown ${showLanguageDropdown ? 'show' : ''}`}>
                {/* Language options */}
                {currentLanguage !== 'US' && (
                    <LanguageOption countryCode="US" onClick={() => switchLanguage('US')} />
                )}
                {currentLanguage !== 'FI' && (
                    <LanguageOption countryCode="FI" onClick={() => switchLanguage('FI')} />
                )}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
