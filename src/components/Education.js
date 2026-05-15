import React, { useEffect, useRef } from 'react';
import '../styles/Education.css';

const Education = () => {
    const educationData = [
        {
            institution: 'Northeastern University',
            degree: 'M.S. Information Systems',
            location: 'Boston, USA',
            period: '2024 — 2026',
        },
        {
            institution: 'Anna University',
            degree: 'B.Tech Information Technology',
            location: 'Chennai, India',
            period: '2019 — 2023',
        },
        {
            institution: 'Montfort Matriculation Hr. Sec. School',
            degree: 'Higher Secondary',
            location: 'Chennai, India',
            period: '2005 — 2019',
        },
    ];

    const itemRefs = useRef([]);

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

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="academics" className="education-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-number">03</span>
                    <h2>Academics</h2>
                </div>
                <div className="education-timeline">
                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className="education-item"
                            ref={(el) => (itemRefs.current[index] = el)}
                        >
                            <div className="education-content">
                                <div className="education-details">
                                    <h3 className="education-institution">{item.institution}</h3>
                                    <p className="education-degree">{item.degree}</p>
                                </div>
                                <div className="education-meta">
                                    <span className="education-period">{item.period}</span>
                                    <span className="education-location">{item.location}</span>
                                </div>
                            </div>
                            <div className="education-divider"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
