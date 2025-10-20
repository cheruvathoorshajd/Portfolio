import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    const technicalSkills = [
        'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS (Sass)', 'Python',
        'React.js', 'Node.js', 'MySQL', 'MongoDB', 'Express.js', 'Redux',
        'Mongoose', 'Gulp', 'Vue', 'RESTful APIs', 'Git'
    ];

    const designSkills = [
        'UI/UX Design', 'Usability Testing', 'Agile', 'Scrum', 'Balsamiq',
        'Figma', 'Sketch', 'Adobe XD', 'Moqups', 'WordPress', 'Photoshop',
        'Canva', 'UI/UX Testing'
    ];

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

        if (section1Ref.current) observer.observe(section1Ref.current);
        if (section2Ref.current) observer.observe(section2Ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section className="skills-section" ref={section1Ref}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-number">02</span>
                        <h2>Skills I've Acquired</h2>
                    </div>
                    <div className="skills-container">
                        <div className="skills-wrapper">
                            {[...technicalSkills, ...technicalSkills].map((skill, index) => (
                                <span key={index} className="skill">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="skills-section2" ref={section2Ref}>
                <div className="container">
                    <div className="skills-container2">
                        <div className="skills-wrapper2">
                            {[...designSkills, ...designSkills].map((skill, index) => (
                                <span key={index} className="skill2">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
