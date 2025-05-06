import React, { useState, useEffect } from 'react';
import '../Styles/Typewriter.css';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100); // 100ms per character
    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="animated-title">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </h1>
  );
};

export default Typewriter;
