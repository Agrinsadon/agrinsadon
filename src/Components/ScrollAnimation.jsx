import { useEffect, useState, useRef } from 'react';
import '../Styles/ScrollAnimation.css';

// eslint-disable-next-line react/prop-types
const ScrollAnimation = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.02,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div ref={elementRef} className={isVisible ? 'animated' : 'hidden'}>
            {children}
        </div>
    );
};

export default ScrollAnimation;
