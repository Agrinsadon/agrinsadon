import React, { useState, useEffect, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import '../Styles/TextEncrypt.css';

const TextEncrypt = ({ children }) => {
    const [displayText, setDisplayText] = useState('');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const text = Children.toArray(children).reduce((acc, child) => {
        return typeof child === 'string' ? acc + child : acc + (child.props.children || '');
    }, '');

    useEffect(() => {
        let interval;
        let frame = 0;

        const randomChar = () => characters[Math.floor(Math.random() * characters.length)];

        const animateText = () => {
            if (frame <= text.length) {
                let newDisplayText = text.split('').map((char, index) => {
                    if (index < frame) {
                        return char;
                    } else {
                        return randomChar();
                    }
                }).join('');
                setDisplayText(newDisplayText);
                frame++;
            } else {
                clearInterval(interval);
                setDisplayText(text);
            }
        };

        interval = setInterval(animateText, 80);

        return () => {
            clearInterval(interval);
        };
    }, [text]);

    // Clone the children with the animated text
    const animatedChildren = React.Children.map(children, (child) => {
        if (typeof child === 'string') {
            return displayText;
        }
        return cloneElement(child, { children: displayText });
    });

    return (
        <div className="text-encrypt">
            {animatedChildren}
        </div>
    );
};

TextEncrypt.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TextEncrypt;
