import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../../constants';
import '../../styles/Contact.css';

const DesignContact = () => {
    const sectionRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    const handleMouseMove = (e, element) => {
        const rect = element.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
        setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <section id="contact" className="contact-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="section-number">05</span>
                    <h2>Let's work together</h2>
                </div>
                <div className="contact-content">
                    <p>Open to UX Designer roles starting August 2026. Available for interviews, portfolio walkthroughs, and conversations.</p>
                    <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="magnetic-button primary-link"
                        style={{
                            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {PERSONAL_INFO.email}
                    </a>
                    <div className="social-links">
                        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={PERSONAL_INFO.resume} target="_blank" rel="noopener noreferrer">Resume</a>
                        <Link to="/dev">Engineering Portfolio →</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignContact;
