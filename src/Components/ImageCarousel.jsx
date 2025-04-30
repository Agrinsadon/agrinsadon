import React, { useState, useEffect } from 'react';
import '../Styles/ImageCarousel.css';

// eslint-disable-next-line react/prop-types
const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [images.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="image-carousel-container">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="carousel-image"
      />
          <button className="carousel-button carousel-button-left" onClick={() => goToImage(currentImageIndex - 1 < 0 ? images.length - 1 : currentImageIndex - 1)}>&#10094;</button>
          <button className="carousel-button carousel-button-right" onClick={() => goToImage((currentImageIndex + 1) % images.length)}>&#10095;</button>
          <div className="carousel-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => goToImage(index)}
            >
              &#9679; {/* This is a filled circle character */}
            </span>
          ))}
        </div>
        <div className="carousel-content">
          <h2>Header</h2>
          <p>Some text below the header</p>
          <p>Another text below the small text</p>
          <div className="project-links">
            {/* Example links, replace with actual project data */}
            <a href="#" target="_blank" rel="noopener noreferrer">Link 1</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Link 2</a>
          </div>
        </div>
    </div>
  );
};

export default ImageCarousel;
