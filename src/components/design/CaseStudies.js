import React, { useState, useEffect, useRef } from 'react';
import { CASE_STUDIES } from '../../constants';
import CaseStudyDetail from './CaseStudyDetail';
import '../../styles/design/CaseStudies.css';

const CaseStudies = () => {
    const [selectedCase, setSelectedCase] = useState(null);
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

    const openCase = (study) => {
        if (study.link) {
            setSelectedCase(study);
        }
    };

    return (
        <section id="case-studies" className="case-studies-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-number">02</span>
                    <h2>Selected Work</h2>
                </div>

                {CASE_STUDIES.map((study, index) => (
                    <article
                        key={study.id}
                        className="case-study-item"
                        ref={(el) => (itemRefs.current[index] = el)}
                    >
                        <div
                            className="case-study-visual"
                            onClick={() => openCase(study)}
                            role={study.link ? 'button' : undefined}
                            tabIndex={study.link ? 0 : undefined}
                            onKeyDown={(e) => {
                                if (study.link && (e.key === 'Enter' || e.key === ' ')) {
                                    e.preventDefault();
                                    openCase(study);
                                }
                            }}
                        >
                            <span className="case-study-tag">{study.tag}</span>
                            {study.image ? (
                                <img
                                    src={`${process.env.PUBLIC_URL}${study.image}`}
                                    alt={`${study.title} — ${study.tag}`}
                                    className="case-study-img"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="case-study-placeholder">
                                    <span className="case-study-placeholder-num">{study.number}</span>
                                    <span className="case-study-placeholder-label">
                                        {study.link ? 'Click to view' : 'Visual placeholder'}
                                    </span>
                                </div>
                            )}
                            {study.link && <div className="case-study-hover-overlay"><span>View case study →</span></div>}
                        </div>
                        <div className="case-study-info">
                            <span className="case-study-number">Case {study.number}</span>
                            <h3 className="case-study-title">{study.title}</h3>
                            <p className="case-study-tagline">"{study.tagline}"</p>
                            <p className="case-study-summary">{study.summary}</p>

                            <div className="case-study-meta">
                                <div className="case-study-meta-item">
                                    <span className="case-study-meta-label">Role</span>
                                    <span className="case-study-meta-value">{study.role}</span>
                                </div>
                                <div className="case-study-meta-item">
                                    <span className="case-study-meta-label">Year</span>
                                    <span className="case-study-meta-value">{study.duration}</span>
                                </div>
                                <div className="case-study-meta-item">
                                    <span className="case-study-meta-label">Context</span>
                                    <span className="case-study-meta-value">{study.context}</span>
                                </div>
                            </div>

                            <div className="case-study-tools">
                                {study.tools.map((tool, i) => (
                                    <span key={i} className="case-study-tool">{tool}</span>
                                ))}
                            </div>

                            <button
                                className="case-study-link"
                                type="button"
                                onClick={() => openCase(study)}
                                disabled={!study.link}
                            >
                                {study.link ? 'Read case study' : 'Coming soon'}
                                <span className="case-study-link-arrow">→</span>
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {selectedCase && (
                <CaseStudyDetail
                    caseStudy={selectedCase}
                    onClose={() => setSelectedCase(null)}
                />
            )}
        </section>
    );
};

export default CaseStudies;
