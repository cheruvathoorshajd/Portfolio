import React, { useState, useEffect, useRef } from 'react';
import { ENGINEERING_CASE_STUDIES } from '../constants';
import ProjectDetail from './ProjectDetail';
import '../styles/Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
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
            { threshold: 0.15 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const openProject = (project) => {
        if (project.link) {
            const href = `${project.link.startsWith('/') ? process.env.PUBLIC_URL : ''}${project.link}`;
            window.open(href, '_blank', 'noopener,noreferrer');
        } else {
            setSelectedProject(project);
        }
    };

    return (
        <section id="work" className="eng-work-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-number">04</span>
                    <h2>Project Work</h2>
                </div>

                {ENGINEERING_CASE_STUDIES.map((project, index) => (
                    <article
                        key={project.id}
                        className="eng-cs-item"
                        ref={(el) => (itemRefs.current[index] = el)}
                    >
                        <div
                            className="eng-cs-visual"
                            onClick={() => openProject(project)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    openProject(project);
                                }
                            }}
                        >
                            <span className="eng-cs-tag">{project.tag}</span>
                            <img
                                src={`${process.env.PUBLIC_URL}${project.image}`}
                                alt={`${project.title} — ${project.tag}`}
                                className="eng-cs-img"
                                loading="lazy"
                            />
                            <div className="eng-cs-hover-overlay">
                                <span>{project.link ? 'View case study →' : 'View project →'}</span>
                            </div>
                        </div>
                        <div className="eng-cs-info">
                            <span className="eng-cs-number">Project {project.number}</span>
                            <h3 className="eng-cs-title">{project.title}</h3>
                            <p className="eng-cs-tagline">"{project.tagline}"</p>
                            <p className="eng-cs-summary">{project.summary}</p>

                            <div className="eng-cs-meta">
                                <div className="eng-cs-meta-item">
                                    <span className="eng-cs-meta-label">Role</span>
                                    <span className="eng-cs-meta-value">{project.role}</span>
                                </div>
                                <div className="eng-cs-meta-item">
                                    <span className="eng-cs-meta-label">Year</span>
                                    <span className="eng-cs-meta-value">{project.duration}</span>
                                </div>
                                <div className="eng-cs-meta-item">
                                    <span className="eng-cs-meta-label">Context</span>
                                    <span className="eng-cs-meta-value">{project.context}</span>
                                </div>
                            </div>

                            <div className="eng-cs-tools">
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="eng-cs-tool">{tool}</span>
                                ))}
                            </div>

                            <button
                                className="eng-cs-link"
                                type="button"
                                onClick={() => openProject(project)}
                            >
                                {project.link ? (project.linkLabel || 'Read case study') : 'View project'}
                                <span className="eng-cs-link-arrow">→</span>
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {selectedProject && (
                <ProjectDetail
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;
