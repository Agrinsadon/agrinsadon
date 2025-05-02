import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import '../Pages/Projects/Project.css';
import '../Styles/ImageCarousel.css';

const ImageCarousel = ({ images, projects }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 30000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [projects.length]);

  const goToImage = (index) => {
    const newIndex = (index + projects.length) % projects.length;
    setCurrentImageIndex(newIndex);
    startAutoSlide(); // Reset timer when image changes manually
  };

  const currentProject = projects[currentImageIndex];

  return (
    <div className="image-carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`Slide ${idx + 1}`} className="carousel-image" />
        ))}
      </div>

      <button
        className="carousel-button carousel-button-left"
        onClick={() => goToImage(currentImageIndex - 1)}
      >
        &#10094;
      </button>
      <button
        className="carousel-button carousel-button-right"
        onClick={() => goToImage(currentImageIndex + 1)}
      >
        &#10095;
      </button>

      <div className="carousel-indicators">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>

      <div className="carousel-content">
        <h3 className="project-name-screen">{currentProject.name}</h3>
        <p className="project-description-screen">{currentProject.description}</p>
        <p className="project-techstack-screen">{currentProject.techstack}</p>
        <div className="project-links-screen">
          {currentProject.links.map((link, linkIndex) => (
            <a key={linkIndex} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon === 'faGithub' ? (
                <FontAwesomeIcon icon={faGithub} />
              ) : link.icon === 'faYoutube' ? (
                <FontAwesomeIcon icon={faYoutube} />
              ) : link.icon === 'faExternalLinkAlt' ? (
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              ) : null}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
