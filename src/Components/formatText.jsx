// eslint-disable-next-line no-unused-vars
import React from 'react';

export const formatDescription = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/); // Split by **bold** patterns
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <b key={index}>{part.slice(2, -2)}</b>; // Remove ** and wrap in <b>
        }
        return <span key={index}>{part}</span>; // Keep regular text with \n
    });
};