import React, { useState, useEffect, useRef } from 'react';
import ProjectDetail from './ProjectDetail';
import '../styles/Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectsData = [
        {
            title: 'Nexus911',
            category: 'Design & Development',
            image: `${process.env.PUBLIC_URL}/Nexus911.png`,
            link: '#'
        },
        {
            title: 'FinTrack',
            category: 'Design & Development',
            image: `${process.env.PUBLIC_URL}/Fintrack.png`,
            link: '#'
        },
        {
            title: 'VOND.2',
            category: 'Design & Development',
            image: `${process.env.PUBLIC_URL}/VOND.2.png`,
            link: '#'
        },
        {
            title: 'BizzNex',
            category: 'Design & Development',
            image: `${process.env.PUBLIC_URL}/BizzNex.png`,
            link: '#'
        },
        {
            title: 'AviaOhr',
            category: 'Design & Development (On-Going)',
            image: `${process.env.PUBLIC_URL}/AviaOhr.png`,
            link: '#'
        },
        {
            title: 'MedStar',
            category: 'Design & Development',
            image: `${process.env.PUBLIC_URL}/Medstar.png`,
            link: '#'
        }
    ];

    const projectRefs = useRef([]);

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

        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="work" className="work-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-number">03</span>
                    <h2>Project Work</h2>
                </div>
                <div className="project-showcase">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="project-item"
                            ref={(el) => (projectRefs.current[index] = el)}
                        >
                            <div className="project-content">
                                <div className="project-image">
                                    <div className="img-placeholder">
                                        <img src={project.image} alt={project.title} className="project-img" />
                                    </div>
                                    <button
                                        className="view-button"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        View
                                    </button>
                                </div>
                                <div className="project-details">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-category">{project.category}</p>
                                </div>
                            </div>
                            <div className="project-divider"></div>
                        </div>
                    ))}
                </div>
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
