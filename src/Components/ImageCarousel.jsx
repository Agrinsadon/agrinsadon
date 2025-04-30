import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import '../Pages/Projects/Project.css';
import '../Styles/ImageCarousel.css';

// eslint-disable-next-line react/prop-types
const ImageCarousel = ({ images, translations, project }) => {
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
            </span>
          ))}
        </div>
        <div className="carousel-content">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-techstack">{project.techstack}</p>
          <div className="project-links">
            {project.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon === 'faGithub' ? <FontAwesomeIcon icon={faGithub} /> :
                     link.icon === 'faYoutube' ? <FontAwesomeIcon icon={faYoutube} /> :
                     link.icon === 'faExternalLinkAlt' ? <FontAwesomeIcon icon={faExternalLinkAlt} /> :
                     null}
                </a>
            ))}
          </div>
        </div>
    </div>
  );
};

export default ImageCarousel;
