import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';
import {
    SiPython, SiJavascript, SiTypescript, SiHtml5, SiSass,
    SiLangchain, SiGoogle, SiTensorflow, SiScikitlearn, SiNumpy,
    SiPandas, SiScipy, SiReact, SiNextdotjs, SiVuedotjs, SiRedux,
    SiTailwindcss, SiFramer, SiFastapi, SiNodedotjs, SiExpress,
    SiFlask, SiGraphql,
    SiGooglecloud, SiDocker, SiKubernetes, SiHelm, SiCloudflare,
    SiMongodb, SiPostgresql, SiMysql, SiSupabase,
    SiFigma, SiGit
} from 'react-icons/si';
import { FaAws, FaMicrosoft, FaRobot, FaBrain, FaChartLine, FaDatabase, FaCode, FaCogs, FaPalette, FaPencilRuler, FaMobileAlt, FaSearch, FaUsers, FaVial, FaPaintBrush } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

const Skills = () => {
    const sectionRef = useRef(null);
    const rowRefs = useRef([]);

    const categories = [
        {
            label: 'AI / Machine Learning',
            skills: [
                { name: 'LangChain', icon: <SiLangchain /> },
                { name: 'LangGraph', icon: <FaBrain /> },
                { name: 'LangSmith', icon: <FaVial /> },
                { name: 'Google ADK', icon: <SiGoogle /> },
                { name: 'Multi-Agent', icon: <FaRobot /> },
                { name: 'RAG', icon: <FaDatabase /> },
                { name: 'ReAct', icon: <FaCogs /> },
                { name: 'Prompt Eng.', icon: <FaCode /> },
                { name: 'TensorFlow', icon: <SiTensorflow /> },
                { name: 'scikit-learn', icon: <SiScikitlearn /> },
                { name: 'NumPy', icon: <SiNumpy /> },
                { name: 'Pandas', icon: <SiPandas /> },
                { name: 'SciPy', icon: <SiScipy /> },
                { name: 'statsmodels', icon: <FaChartLine /> },
                { name: 'NLI', icon: <FaBrain /> },
                { name: 'Time-Series', icon: <FaChartLine /> },
            ],
            speed: 60,
            direction: 'left',
        },
        {
            label: 'Frontend Development',
            skills: [
                { name: 'React.js', icon: <SiReact /> },
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'Vue.js', icon: <SiVuedotjs /> },
                { name: 'Redux', icon: <SiRedux /> },
                { name: 'JavaScript', icon: <SiJavascript /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'HTML/CSS', icon: <SiHtml5 /> },
                { name: 'SCSS/Sass', icon: <SiSass /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
                { name: 'Fluent UI', icon: <FaCogs /> },
                { name: 'Framer Motion', icon: <SiFramer /> },
            ],
            speed: 45,
            direction: 'right',
        },
        {
            label: 'Backend & APIs',
            skills: [
                { name: 'Python', icon: <SiPython /> },
                { name: 'FastAPI', icon: <SiFastapi /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'Express.js', icon: <SiExpress /> },
                { name: 'Flask', icon: <SiFlask /> },
                { name: 'Pydantic', icon: <SiPython /> },
                { name: 'SQLAlchemy', icon: <FaDatabase /> },
                { name: 'REST APIs', icon: <TbApi /> },
                { name: 'GraphQL', icon: <SiGraphql /> },
            ],
            speed: 40,
            direction: 'left',
        },
        {
            label: 'Cloud & DevOps',
            skills: [
                { name: 'AWS', icon: <FaAws /> },
                { name: 'Azure', icon: <FaMicrosoft /> },
                { name: 'GCP', icon: <SiGooglecloud /> },
                { name: 'Docker', icon: <SiDocker /> },
                { name: 'Kubernetes', icon: <SiKubernetes /> },
                { name: 'Helm', icon: <SiHelm /> },
                { name: 'CI/CD', icon: <FaCogs /> },
                { name: 'Cloudflare', icon: <SiCloudflare /> },
            ],
            speed: 35,
            direction: 'right',
        },
        {
            label: 'Databases',
            skills: [
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'PostgreSQL', icon: <SiPostgresql /> },
                { name: 'MySQL', icon: <SiMysql /> },
                { name: 'T-SQL', icon: <FaDatabase /> },
                { name: 'Supabase', icon: <SiSupabase /> },
                { name: 'Cosmos DB', icon: <FaMicrosoft /> },
            ],
            speed: 30,
            direction: 'left',
        },
        {
            label: 'Design & Tools',
            skills: [
                { name: 'Figma', icon: <SiFigma /> },
                { name: 'Adobe Suite', icon: <FaPaintBrush /> },
                { name: 'Wireframing', icon: <FaPencilRuler /> },
                { name: 'Prototyping', icon: <FaPalette /> },
                { name: 'UI/UX Design', icon: <FaMobileAlt /> },
                { name: 'Responsive', icon: <FaMobileAlt /> },
                { name: 'Git', icon: <SiGit /> },
                { name: 'Agile/Scrum', icon: <FaUsers /> },
                { name: 'SEO', icon: <FaSearch /> },
                { name: 'Usability', icon: <FaVial /> },
            ],
            speed: 38,
            direction: 'right',
        },
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

        if (sectionRef.current) observer.observe(sectionRef.current);
        rowRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="skills-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="section-number">02</span>
                    <h2>Technical Expertise</h2>
                </div>

                <div className="skills-categories">
                    {categories.map((cat, catIndex) => (
                        <div
                            className="skills-category-row"
                            key={catIndex}
                            ref={(el) => (rowRefs.current[catIndex] = el)}
                            style={{ '--row-delay': `${catIndex * 0.15}s` }}
                        >
                            <div className="skills-category-label">{cat.label}</div>
                            <div className="skills-marquee">
                                <div
                                    className={`skills-track ${cat.direction === 'right' ? 'scroll-right' : 'scroll-left'}`}
                                    style={{ '--scroll-speed': `${cat.speed}s` }}
                                >
                                    {[...cat.skills, ...cat.skills].map((skill, index) => (
                                        <span key={index} className="skill-chip">
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
