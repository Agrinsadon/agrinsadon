// eslint-disable-next-line no-unused-vars
import React from 'react';

export const formatDescription = (text) => {
    const lines = text.split('\n');
    return lines.map((line, index) => (
        <span
            key={index}
            dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }}
        />
    ));
};

