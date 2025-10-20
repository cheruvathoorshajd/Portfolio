import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        const title = titleRef.current;
        const subtitle = subtitleRef.current;

        // Animate on mount
        setTimeout(() => {
            if (title) title.classList.add('animate-in');
        }, 100);

        setTimeout(() => {
            if (subtitle) subtitle.classList.add('animate-in');
        }, 400);
    }, []);

    return (
        <section id="home" className="hero-section">
            <div className="container">
                <h1 className="main-title" ref={titleRef}>
                    Dennis Sharon Cheruvathoor
                </h1>
                <h3 className="subtitle" ref={subtitleRef}>
                    Designer & Developer
                </h3>
            </div>
            <div className="scroll-indicator">
                <span>Scroll down</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
