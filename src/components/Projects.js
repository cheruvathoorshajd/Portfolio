import React, { useEffect, useRef } from 'react';
import '../styles/Projects.css';

const Projects = () => {
    const projectsData = [
        {
            title: 'BizzNex',
            category: 'Design & Development',
            image: `${process.env.PUBLIC_URL}/BizzNex logo.png`,
            link: 'https://csdsharon.my.canva.site/my-silhouette-exhibition'
        },
        {
            title: 'AviaOhr',
            category: 'Design & Development (On-Going)',
            image: `${process.env.PUBLIC_URL}/AviaOhr.png`,
            link: 'https://csdsharon.my.canva.site/my-silhouette-exhibition'
        },
        {
            title: 'VOND.2',
            category: 'Design & Development',
            image: `${process.env.PUBLIC_URL}/VOND.2.png`,
            link: 'https://csdsharon.my.canva.site/my-silhouette-exhibition'
        },
        {
            title: 'MedStar',
            category: 'Design & Development',
            image: `${process.env.PUBLIC_URL}/Medstar.png`,
            link: 'https://csdsharon.my.canva.site/my-silhouette-exhibition'
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
                                    <a
                                        href={project.link}
                                        className="view-button"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View
                                    </a>
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
        </section>
    );
};

export default Projects;
