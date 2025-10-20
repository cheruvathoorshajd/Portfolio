import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
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
        if (contentRef.current) observer.observe(contentRef.current);
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
                <div className="about-content" ref={contentRef}>
                    <div className="about-text" ref={textRef}>
                        <p>
                            Twelve years ago, I first discovered HTML in 7th grade, which left me in awe yet disappointed
                            by its limitations. Fast-forward to 2025, and I'm pursuing my Master in Information Systems
                            at Northeastern University, Boston, MA.
                        </p>
                        <p>
                            With a passion for technology and design, I'm honing my skills as an aspiring Full-Stack
                            Developer and UI/UX Designer, continuously on the path of learning.
                        </p>
                    </div>
                    <div className="about-image" ref={imageRef}>
                        <img src={`${process.env.PUBLIC_URL}/Boston.png`} alt="Boston" className="about-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
