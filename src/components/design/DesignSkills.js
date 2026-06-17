import React, { useEffect, useRef } from 'react';
import '../../styles/Skills.css';
import { SiFigma, SiSketch, SiMiro } from 'react-icons/si';
import {
    FaPencilRuler, FaUsers, FaSearch, FaVial, FaUniversalAccess,
    FaKeyboard, FaMobileAlt, FaPaintBrush, FaPalette, FaShapes,
    FaProjectDiagram, FaSitemap, FaLayerGroup, FaFlask, FaClipboardCheck,
    FaCogs, FaComments, FaFileAlt, FaRoute, FaTags, FaThList,
    FaBookOpen, FaCubes, FaEye, FaAdjust, FaMagic, FaImage, FaPenNib
} from 'react-icons/fa';

const DesignSkills = () => {
    const sectionRef = useRef(null);
    const rowRefs = useRef([]);

    const categories = [
        {
            label: 'Design Tools',
            skills: [
                { name: 'Figma', icon: <SiFigma /> },
                { name: 'Adobe XD', icon: <FaShapes /> },
                { name: 'Sketch', icon: <SiSketch /> },
                { name: 'Adobe Illustrator', icon: <FaPenNib /> },
                { name: 'Adobe Photoshop', icon: <FaImage /> },
                { name: 'Adobe InDesign', icon: <FaFileAlt /> },
                { name: 'Principle', icon: <FaMagic /> },
                { name: 'FigJam', icon: <SiFigma /> },
                { name: 'Miro', icon: <SiMiro /> },
                { name: 'Balsamiq', icon: <FaPencilRuler /> },
                { name: 'Adobe Suite', icon: <FaPaintBrush /> },
            ],
            speed: 60,
            direction: 'left',
        },
        {
            label: 'UX Methods',
            skills: [
                { name: 'User Research', icon: <FaSearch /> },
                { name: 'Usability Testing', icon: <FaVial /> },
                { name: 'Heuristic Evaluation', icon: <FaClipboardCheck /> },
                { name: 'Journey Mapping', icon: <FaRoute /> },
                { name: 'Personas', icon: <FaUsers /> },
                { name: 'Card Sorting', icon: <FaThList /> },
                { name: 'A/B Testing', icon: <FaFlask /> },
                { name: 'Information Architecture', icon: <FaSitemap /> },
                { name: 'Wireframing', icon: <FaPencilRuler /> },
                { name: 'Prototyping', icon: <FaShapes /> },
            ],
            speed: 45,
            direction: 'right',
        },
        {
            label: 'Visual Craft',
            skills: [
                { name: 'Typography', icon: <FaFileAlt /> },
                { name: 'Color Theory', icon: <FaPalette /> },
                { name: 'Layout Systems', icon: <FaThList /> },
                { name: 'Design Tokens', icon: <FaTags /> },
                { name: 'Iconography', icon: <FaShapes /> },
                { name: 'Motion Design', icon: <FaMagic /> },
                { name: 'Brand Systems', icon: <FaPaintBrush /> },
                { name: 'Component Libraries', icon: <FaCubes /> },
            ],
            speed: 40,
            direction: 'left',
        },
        {
            label: 'Accessibility & Standards',
            skills: [
                { name: 'WCAG 2.2', icon: <FaUniversalAccess /> },
                { name: 'ARIA Patterns', icon: <FaUniversalAccess /> },
                { name: 'Keyboard Nav', icon: <FaKeyboard /> },
                { name: 'Screen Reader Testing', icon: <FaEye /> },
                { name: 'Contrast Ratios', icon: <FaAdjust /> },
                { name: 'Inclusive Design', icon: <FaUsers /> },
                { name: 'Mobile-First', icon: <FaMobileAlt /> },
                { name: 'Responsive Patterns', icon: <FaMobileAlt /> },
            ],
            speed: 35,
            direction: 'right',
        },
        {
            label: 'Collaboration',
            skills: [
                { name: 'Design Systems', icon: <FaLayerGroup /> },
                { name: 'Dev Handoff', icon: <FaCogs /> },
                { name: 'Agile / Scrum', icon: <FaProjectDiagram /> },
                { name: 'Cross-Functional Workshops', icon: <FaComments /> },
                { name: 'Stakeholder Alignment', icon: <FaUsers /> },
                { name: 'Design Critique', icon: <FaComments /> },
                { name: 'Documentation', icon: <FaBookOpen /> },
            ],
            speed: 38,
            direction: 'left',
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
                    <span className="section-number">04</span>
                    <h2>Design Toolkit</h2>
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

export default DesignSkills;
