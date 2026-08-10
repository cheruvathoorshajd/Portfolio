import React, { useEffect, useRef } from 'react';
import { ENGINEERING_ABOUT_PILLARS } from '../constants';
import '../styles/About.css';

const About = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        if (textRef.current) observer.observe(textRef.current);
        if (imageRef.current) observer.observe(imageRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="section-number">01</span>
                    <h2>Early Focuses</h2>
                </div>
                <div className="about-content">
                    <div className="about-text" ref={textRef}>
                        <p>
                            Twelve years ago, I first discovered HTML in 7th grade, which left me in awe yet disappointed
                            by its limitations. Fast-forward to 2026, and I'm pursuing my <strong>Master in Information Systems</strong>
                            {' '}at Northeastern University, Boston, MA.
                        </p>
                        <p>
                            Today, I build across the <strong>full spectrum</strong> — from AI agents and machine learning
                            pipelines to modern frontend interfaces, scalable backend systems, and cloud-native
                            infrastructure — all grounded in a sharp eye for design and user experience.
                        </p>
                        <div className="about-pillars">
                            {ENGINEERING_ABOUT_PILLARS.map((pillar, i) => (
                                <div className="about-pillar" key={i}>
                                    <span className="about-pillar-label">{pillar.label}</span>
                                    <span className="about-pillar-value">{pillar.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about-image" ref={imageRef}>
                        <div className="about-img-wrapper">
                            <img
                                src={`${process.env.PUBLIC_URL}/Design 1.jpeg`}
                                alt="Dennis Sharon Cheruvathoor"
                                className="about-img"
                            />
                        </div>
                        <div className="about-img-caption">
                            Boston, MA — Available August 2026
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
