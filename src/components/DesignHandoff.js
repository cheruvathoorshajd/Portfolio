import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/DesignHandoff.css';

const DesignHandoff = () => {
    const sectionRef = useRef(null);

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

    return (
        <section className="design-handoff" ref={sectionRef}>
            <div className="container">
                <div className="handoff-inner">
                    <span className="handoff-eyebrow">Design Work</span>
                    <h2 className="handoff-title">
                        Looking for the design side?
                    </h2>
                    <p className="handoff-copy">
                        Before I shipped systems, I shipped interfaces. The UX portfolio walks through
                        the research, wireframes, and design decisions behind each project — visual
                        craft, accessibility, and the quiet choices that don't show in code.
                    </p>
                    <Link to="/" className="handoff-cta">
                        <span className="handoff-cta-text">View UI/UX Portfolio</span>
                        <span className="handoff-cta-arrow">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DesignHandoff;
