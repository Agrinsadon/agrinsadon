import React, { useEffect, useState } from 'react';
import '../Styles/IntroOverlay.css';

const IntroOverlay = ({ onFinish }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [videoEnded, setVideoEnded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVideoEnded(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (videoEnded) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                if (onFinish) onFinish();
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [videoEnded, onFinish]);

    return (
        <div className={`intro-overlay ${isVisible ? 'visible' : 'hidden'}`}>
            <div className={`intro-content ${videoEnded ? 'elevate' : ''}`}>
                <video
                    src="/LogoVideo.mp4"
                    autoPlay
                    muted
                    onEnded={() => setVideoEnded(true)}
                    className="intro-video"
                />
            </div>
        </div>
    );
};

export default IntroOverlay;
