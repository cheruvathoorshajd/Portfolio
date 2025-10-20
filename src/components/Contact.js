import React, { useEffect, useRef, useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
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
                    <span className="section-number">04</span>
                    <h2>Contact</h2>
                </div>
                <div className="contact-content">
                    <p>Curious about me? Feel free to reach out!</p>
                    <a
                        href="mailto:csdsharon@gmail.com"
                        className="magnetic-button primary-link"
                        style={{
                            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                        onMouseLeave={handleMouseLeave}
                    >
                        csdsharon@gmail.com
                    </a>
                    <div className="social-links">
                        <a
                            href="https://github.com/cheruvathoorshajd"
                            className="magnetic-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                        <a
                            href="https://www.linkedin.com/in/csdsharon"
                            className="magnetic-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
