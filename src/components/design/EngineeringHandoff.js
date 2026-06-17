import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/design/EngineeringHandoff.css';

const EngineeringHandoff = () => {
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
        <section className="engineering-handoff" ref={sectionRef}>
            <div className="container">
                <div className="handoff-inner">
                    <span className="handoff-eyebrow">Engineering Work</span>
                    <h2 className="handoff-title">
                        Looking for the engineering side?
                    </h2>
                    <p className="handoff-copy">
                        I also build the things I design — AI agents, full-stack systems, and the
                        infrastructure that runs underneath. The engineering portfolio lives one click away.
                    </p>
                    <Link to="/dev" className="handoff-cta">
                        <span className="handoff-cta-text">View Engineering Portfolio</span>
                        <span className="handoff-cta-arrow">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default EngineeringHandoff;
