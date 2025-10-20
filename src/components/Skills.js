import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    // Programming Languages & Core Technologies
    const coreSkills = [
        'JavaScript', 'TypeScript', 'Python', 'C', 'PHP', 'HTML5', 'CSS3', 'SCSS/Sass'
    ];

    // Frontend Technologies
    const frontendSkills = [
        'React.js', 'Vue.js', 'AngularJS', 'Next.js', 'Redux', 'jQuery', 'GraphQL', 'Axios'
    ];

    // Backend Technologies
    const backendSkills = [
        'Node.js', 'Express.js', 'Flask', 'FastAPI', 'RESTful APIs', 'Mongoose'
    ];

    // Cloud, DevOps & Databases
    const cloudSkills = [
        'AWS', 'Azure', 'Docker', 'Kubernetes', 'MongoDB', 'MySQL', 'PostgreSQL', 'T-SQL'
    ];

    // Machine Learning & Data Science
    const mlSkills = [
        'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'
    ];

    // Design & Tools
    const designSkills = [
        'Figma', 'Sketch', 'Adobe Creative Suite', 'WordPress', 'Wireframing', 'Prototyping',
        'UI/UX Design', 'Responsive Design'
    ];

    // Development Tools & Practices
    const toolsSkills = [
        'Git Version Control', 'CI/CD', 'Agile/Scrum', 'SEO', 'Usability Testing', 'Cloudflare'
    ];

    // Combine all skills for scrolling animations
    const allTechnicalSkills = [
        ...coreSkills, ...frontendSkills, ...backendSkills, ...cloudSkills, ...mlSkills
    ];

    const allDesignTools = [
        ...designSkills, ...toolsSkills
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
                        <h2>Technical Expertise</h2>
                    </div>
                    <div className="skills-category-label">Development Stack & Technologies</div>
                    <div className="skills-container">
                        <div className="skills-wrapper">
                            {[...allTechnicalSkills, ...allTechnicalSkills].map((skill, index) => (
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
                    <div className="skills-category-label">Design & Development Tools</div>
                    <div className="skills-container2">
                        <div className="skills-wrapper2">
                            {[...allDesignTools, ...allDesignTools].map((skill, index) => (
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
