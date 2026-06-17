import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '../../styles/design/CaseStudyDetail.css';

const CaseStudyDetail = ({ caseStudy, onClose }) => {
    const overlayRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            if (overlayRef.current) overlayRef.current.classList.add('active');
        }, 10);

        const handleEsc = (e) => {
            if (e.key === 'Escape') handleClose();
        };
        document.addEventListener('keydown', handleEsc);

        return () => {
            document.body.style.overflow = '';
            clearTimeout(timer);
            document.removeEventListener('keydown', handleEsc);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClose = () => {
        if (overlayRef.current) overlayRef.current.classList.remove('active');
        setTimeout(onClose, 500);
    };

    const handleOverlayClick = (e) => {
        if (e.target === overlayRef.current) handleClose();
    };

    return createPortal(
        <div className="case-study-overlay" ref={overlayRef} onClick={handleOverlayClick}>
            <button className="cs-detail-close" onClick={handleClose} aria-label="Close">
                <span className="cs-detail-close-icon">&#x2715;</span>
                <span className="cs-detail-close-text">Close</span>
            </button>

            <div className="cs-detail-scroll" ref={scrollRef}>
                {/* Hero */}
                <section className="cs-detail-hero">
                    <span className="cs-detail-label">Case Study {caseStudy.number}</span>
                    <h1 className="cs-detail-title">{caseStudy.title}</h1>
                    <div className="cs-detail-title-line"></div>
                    <p className="cs-detail-tagline">"{caseStudy.tagline}"</p>
                    <div className="cs-detail-hero-meta">
                        <span className="cs-meta-pill">{caseStudy.tag}</span>
                        <span className="cs-meta-pill">{caseStudy.duration}</span>
                    </div>
                </section>

                {/* Image */}
                {caseStudy.image && (
                    <section className="cs-detail-image-section">
                        <div className="cs-detail-image-wrapper">
                            <img
                                src={`${process.env.PUBLIC_URL}${caseStudy.image}`}
                                alt={`${caseStudy.title} — visual`}
                                className="cs-detail-image"
                            />
                        </div>
                        <div className="cs-detail-image-caption">
                            <span className="cs-caption-line"></span>
                            <span className="cs-caption-text">{caseStudy.title} — {caseStudy.tag}</span>
                        </div>
                    </section>
                )}

                {/* Body */}
                <section className="cs-detail-body">
                    <div className="cs-detail-meta-grid">
                        <div className="cs-detail-meta-item">
                            <span className="cs-meta-number">01</span>
                            <span className="cs-meta-label">Role</span>
                            <span className="cs-meta-value">{caseStudy.role}</span>
                        </div>
                        <div className="cs-detail-meta-item">
                            <span className="cs-meta-number">02</span>
                            <span className="cs-meta-label">Year</span>
                            <span className="cs-meta-value">{caseStudy.duration}</span>
                        </div>
                        <div className="cs-detail-meta-item">
                            <span className="cs-meta-number">03</span>
                            <span className="cs-meta-label">Context</span>
                            <span className="cs-meta-value">{caseStudy.context}</span>
                        </div>
                    </div>

                    <div className="cs-detail-section">
                        <div className="cs-section-header">
                            <span className="cs-section-line"></span>
                            <h2 className="cs-section-title">Overview</h2>
                        </div>
                        <p className="cs-summary-para">{caseStudy.summary}</p>
                    </div>

                    <div className="cs-detail-section">
                        <div className="cs-section-header">
                            <span className="cs-section-line"></span>
                            <h2 className="cs-section-title">Tools & Methods</h2>
                        </div>
                        <div className="cs-detail-tools">
                            {caseStudy.tools.map((tool, i) => (
                                <span
                                    key={i}
                                    className="cs-detail-tool"
                                    style={{ animationDelay: `${0.4 + i * 0.08}s` }}
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* External CTA — Canva/Moqups visual deck */}
                    {caseStudy.link && (
                        <div className="cs-detail-cta-block">
                            <div className="cs-section-header">
                                <span className="cs-section-line"></span>
                                <h2 className="cs-section-title">Visual Case Study</h2>
                            </div>
                            <p className="cs-cta-copy">
                                The full visual case study — wireframes, screens, system explorations — lives
                                in an external deck. Open it in a new tab to view the work in detail.
                            </p>
                            <a
                                href={caseStudy.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cs-detail-cta"
                            >
                                <span className="cs-cta-text">View on {caseStudy.link.includes('moqups') ? 'Moqups' : 'Canva'}</span>
                                <span className="cs-cta-arrow">↗</span>
                            </a>
                        </div>
                    )}

                    {/* Back to top */}
                    <div className="cs-detail-footer">
                        <button
                            className="cs-back-to-top"
                            onClick={() => scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Back to top ↑
                        </button>
                    </div>
                </section>
            </div>
        </div>,
        document.body
    );
};

export default CaseStudyDetail;
