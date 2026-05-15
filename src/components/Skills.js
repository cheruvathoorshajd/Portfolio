import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    // Languages
    const coreSkills = [
        'Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SCSS/Sass'
    ];

    // AI / LLM
    const aiSkills = [
        'LangChain', 'LangGraph', 'LangSmith', 'Google ADK', 'Multi-Agent Systems', 'RAG', 'ReAct', 'Prompt Engineering'
    ];

    // ML & Data
    const mlSkills = [
        'TensorFlow', 'scikit-learn', 'SDV', 'NumPy', 'Pandas', 'SciPy', 'statsmodels', 'NLI', 'Time-Series Modeling'
    ];

    // Frontend Technologies
    const frontendSkills = [
        'React.js', 'Next.js', 'Vue.js', 'Redux', 'Tailwind CSS', 'Fluent UI', 'Framer Motion'
    ];

    // Backend Technologies
    const backendSkills = [
        'FastAPI', 'Node.js', 'Express.js', 'Flask', 'Pydantic', 'SQLAlchemy', 'RESTful APIs', 'GraphQL'
    ];

    // Cloud & DevOps
    const cloudSkills = [
        'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Helm', 'CI/CD', 'Cloudflare'
    ];

    // Databases
    const dbSkills = [
        'MongoDB', 'PostgreSQL', 'MySQL', 'T-SQL', 'Supabase', 'Cosmos DB'
    ];

    // Design & Tools
    const designSkills = [
        'Figma', 'Adobe Creative Suite', 'Wireframing', 'Prototyping',
        'UI/UX Design', 'Responsive Design'
    ];

    // Development Tools & Practices
    const toolsSkills = [
        'Git Version Control', 'Agile/Scrum', 'SEO', 'Usability Testing'
    ];

    // Combine all skills for scrolling animations
    const allTechnicalSkills = [
        ...coreSkills, ...aiSkills, ...mlSkills, ...frontendSkills, ...backendSkills, ...cloudSkills, ...dbSkills
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
