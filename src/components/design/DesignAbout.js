import React, { useEffect, useRef } from 'react';
import { ABOUT_PILLARS } from '../../constants';
import '../../styles/design/DesignAbout.css';

const DesignAbout = () => {
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
        <section id="about" className="design-about-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="section-number">01</span>
                    <h2>About</h2>
                </div>
                <div className="design-about-content">
                    <div className="design-about-text" ref={textRef}>
                        <p>
                            I'm a <strong>UX designer with engineering depth</strong> — currently
                            pursuing a Master of Science in Information Systems at Northeastern University.
                            My design practice began long before my code did: three years at a Chennai studio
                            shipping wireframes, prototypes, and usability sessions across 10+ client products.
                        </p>
                        <p>
                            Today I design at the intersection of human-centered research and emerging AI
                            interfaces — from autonomous multi-agent systems and conversational LLM products
                            to fintech dashboards and SaaS workspaces. I care about the parts of UX most
                            portfolios skip: information architecture, accessibility, and the quiet decisions
                            that make an interface feel inevitable.
                        </p>
                        <div className="design-about-pillars">
                            {ABOUT_PILLARS.map((pillar, i) => (
                                <div className="design-about-pillar" key={i}>
                                    <span className="design-about-pillar-label">{pillar.label}</span>
                                    <span className="design-about-pillar-value">{pillar.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="design-about-image" ref={imageRef}>
                        <div className="design-about-img-wrapper">
                            <img
                                src={`${process.env.PUBLIC_URL}/Design 1.jpeg`}
                                alt="Dennis Sharon Cheruvathoor"
                                className="design-about-img"
                            />
                        </div>
                        <div className="design-about-img-caption">
                            Boston, MA — Available August 2026
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignAbout;
