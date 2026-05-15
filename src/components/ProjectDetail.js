import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '../styles/ProjectDetail.css';

const projectDetails = {
    'Nexus911': {
        tagline: 'Autonomous Multi-Agent 911 Dispatch with Real-Time Hallucination Verification',
        duration: "Apr'26",
        semester: 'Gemini Live Agent Challenge, Hackathon Project',
        program: "Master's in Information System",
        summary: [
            'Nexus911 deploys dedicated AI voice agents for each 911 caller using the Gemini Live API, cross-references their accounts in real time via a shared Knowledge Graph, and merges multiple calls about the same incident into a single enriched dispatch record — in under 20 seconds. Agents adapt vocabulary and pacing based on caller role classification (child, victim, witness, bystander).',
            'The critical differentiator is VerifyLayer, a hallucination verification middleware that validates every extracted fact through NLI scoring, cross-call contradiction detection, and confidence penalization before it enters the dispatch pipeline. The system uses geo-temporal-semantic clustering for incident deduplication, ensuring responders receive a single verified intelligence package.'
        ],
        tech: ['Gemini Live API', 'Google ADK', 'FastAPI', 'WebSocket', 'Python', 'Google Cloud Run']
    },
    'FinTrack': {
        tagline: 'AI-Powered Financial Tracker with Real-Time Market Data and Smart Investment Insights',
        duration: "Mar'26 – Apr'26",
        semester: 'Third Semester, Passion Project',
        program: "Master's in Information System",
        summary: [
            'FinTrack is a modern full-stack financial tracking application featuring real-time market data for stocks, cryptocurrency, and forex. Built with React and TypeScript on the front end with Tailwind CSS for a sleek black-and-white UI, it delivers live stock prices, trending stocks, top gainers/losers, and foreign exchange rates through an intuitive dashboard interface.',
            'The back-end is powered by FastAPI with JWT-based authentication and bcrypt password hashing. Its AI engine performs technical analysis using price momentum, volume, and market cap to generate smart investment recommendations with confidence scores. Data is managed through SQLAlchemy with SQLite, designed for seamless PostgreSQL migration in production.'
        ],
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'SQLAlchemy', 'yfinance']
    },
    'BizzNex': {
        tagline: 'Microservices-Driven Platform for Scalable Task Optimization and Real-Time Business Analytics',
        duration: "Nov'24 – Dec'24",
        semester: 'First Semester, Final Project',
        program: "Master's in Information System",
        summary: [
            'BizzNex is a robust full-stack platform designed to streamline and centralize business operations for small-scale content creators, entrepreneurs, and freelancers. Built with modern web technologies, BizzNex leverages React for its dynamic and responsive front-end, enhanced with Fluent UI for consistent and professional styling. The application ensures rapid development and modern tooling with Vite, a high-performance build tool optimized for web development.',
            'The back-end is powered by Node.js and Express, finally, data management is robustly supported by MongoDB, making it perfect for dynamic content. BizzNex\'s architecture employs a modular design for easy scalability and maintainability, with key features integrated through RESTful APIs, ensuring interoperability and secure communication between front-end and back-end.'
        ],
        tech: ['React', 'Fluent UI', 'Vite', 'Node.js', 'Express', 'MongoDB', 'RESTful APIs']
    },
    'AviaOhr': {
        tagline: 'Empowering Digital Wellness through Predictive Mood Analysis to Enhance Mental Solidity',
        duration: 'On-Going',
        semester: 'Second Semester, Passion Project',
        program: "Master's in Information System",
        summary: [
            'AviaOhr is a digital wellness platform designed to promote mindful technology use and enhance mental health by monitoring screen habits, scheduling breaks from doomscrolling, and tracking personal well-being subjective goals. Built with React.js for the front end and Node.js/Redux/TypeScript for backend logic, it integrates a Python-powered virtual assistant and uses MongoDB for data storage.',
            'The platform analyzes user interactions and mental health research (e.g., behavioral studies) to detect harmful digital habits like prolonged screen use, suggesting mindfulness interventions. When deployed in corporate or telehealth settings, AviaOhr reduces burnout by prompting off-hour disconnections. Currently in development, it aims to meaningfully impact digital well-being.'
        ],
        tech: ['React.js', 'Node.js', 'Redux', 'TypeScript', 'Python', 'MongoDB']
    },
    'VOND.2': {
        tagline: 'Blockchain Enhanced — Machine Learning Driven System for Prescription Drug Monitoring Resulting in Crime Prevention',
        duration: "Dec'21 – Apr'22",
        semester: '6th Semester, Mini Project',
        program: 'B.Tech IT',
        summary: [
            'VOND.2 (Vigilante of Narcotic Detection.2) is a software to track drugs that contain narcotic and psychotropic substances, to prevent misuses like overdosing for euphoria or suicide. The project utilizes criminology insights from US Law Enforcement-1991, local news media, etc. (i.e. data gathered based on criminal activities that include vandalism, assault, and murder committed under the influence of external drugs).',
            'With the collected data, the self-developed "GIHON" algorithm identifies high-volume buyers, cross-referencing with criminal histories (if any). For instance, if the VOND.2 software is deployed in the NCB (Narcotic Control Bureau of India) server it will proactively prevent drug-related crimes by anticipating potential offenders. VOND.2 employs HTML, CSS, and JavaScript for its front end to gather data and MySQL to store it.'
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Blockchain', 'Machine Learning']
    },
    'MedStar': {
        tagline: 'Emergency Response System Utilizing Satellite Internet to Enhance Victim\'s Survivability Rate',
        duration: "Dec'22 – Apr'23",
        semester: '8th Semester, Final Year Project',
        program: 'B.Tech IT',
        summary: [
            'MedStar, a mobile application, integrates the "PISHON" algorithm, which was designed to operate automated drones fitted with imagery sensors, enabled by Satellite Internet, to supply food and first aid emergency supplies. MedStar can address emergencies like individuals stuck in high altitude terrain and ocean ventures which are uncharted territories, expediting resource delivery during the critical initial twenty-four hours.',
            'Triggered by reported emergencies, drones swiftly transport crucial supplies enhancing victims\' survival rate by at least 7-10%. Real-time victim coordinates will be shared with critical emergency response teams like law enforcement departments, fire services, and medical services to enhance coordination. MedStar\'s front-end was successfully carried out in Android Studios using Java and Flutter and tested with optical fiber internet.'
        ],
        tech: ['Java', 'Flutter', 'Android Studio', 'Satellite Internet', 'Drone Systems']
    }
};

const ProjectDetail = ({ project, onClose }) => {
    const overlayRef = useRef(null);
    const contentRef = useRef(null);
    const details = projectDetails[project.title];
    const projectIndex = Object.keys(projectDetails).indexOf(project.title) + 1;

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            if (overlayRef.current) overlayRef.current.classList.add('active');
        }, 10);

        return () => {
            document.body.style.overflow = '';
            clearTimeout(timer);
        };
    }, []);

    const handleClose = () => {
        if (overlayRef.current) overlayRef.current.classList.remove('active');
        setTimeout(onClose, 500);
    };

    const handleOverlayClick = (e) => {
        if (e.target === overlayRef.current) handleClose();
    };

    if (!details) return null;

    return createPortal(
        <div className="project-detail-overlay" ref={overlayRef} onClick={handleOverlayClick}>
            <button className="detail-close-btn" onClick={handleClose} aria-label="Close">
                <span className="close-icon">&#x2715;</span>
                <span className="close-text">Close</span>
            </button>

            <div className="detail-scroll-container" ref={contentRef}>
                {/* Hero Section */}
                <div className="detail-hero">
                    <div className="detail-hero-content">
                        <span className="detail-label">Project 0{projectIndex}</span>
                        <h1 className="detail-title">{project.title}</h1>
                        <div className="detail-title-line"></div>
                        <p className="detail-tagline">"{details.tagline}"</p>
                        <div className="detail-hero-meta">
                            <span className="hero-meta-pill">{details.program}</span>
                            <span className="hero-meta-pill">{details.duration}</span>
                        </div>
                    </div>
                    <div className="detail-scroll-hint">
                        <span>Scroll to explore</span>
                        <div className="detail-scroll-line"></div>
                    </div>
                </div>

                {/* Image Section - Full width cinematic */}
                <div className="detail-body">
                    <div className="detail-image-section">
                        <div className="detail-img-wrapper">
                            <img src={project.image} alt={project.title} className="detail-img" />
                            <div className="img-overlay-gradient"></div>
                        </div>
                        <div className="detail-image-caption">
                            <span className="caption-line"></span>
                            <span className="caption-text">{project.title} — {project.category}</span>
                        </div>
                    </div>

                    {/* Info Grid */}
                    <div className="detail-info-section">
                        <div className="detail-meta">
                            <div className="detail-meta-item">
                                <span className="meta-number">01</span>
                                <span className="meta-label">Duration</span>
                                <span className="meta-value">{details.duration}</span>
                            </div>
                            <div className="detail-meta-item">
                                <span className="meta-number">02</span>
                                <span className="meta-label">Context</span>
                                <span className="meta-value">{details.semester}</span>
                            </div>
                            <div className="detail-meta-item">
                                <span className="meta-number">03</span>
                                <span className="meta-label">Program</span>
                                <span className="meta-value">{details.program}</span>
                            </div>
                        </div>

                        <div className="detail-summary">
                            <div className="section-header-row">
                                <span className="section-accent-line"></span>
                                <h2 className="detail-section-title">Summary</h2>
                            </div>
                            {details.summary.map((para, i) => (
                                <p key={i} className="summary-para" style={{ animationDelay: `${0.6 + i * 0.2}s` }}>{para}</p>
                            ))}
                        </div>

                        <div className="detail-tech">
                            <div className="section-header-row">
                                <span className="section-accent-line"></span>
                                <h2 className="detail-section-title">Technologies</h2>
                            </div>
                            <div className="detail-tech-tags">
                                {details.tech.map((t, i) => (
                                    <span key={i} className="tech-tag" style={{ animationDelay: `${0.8 + i * 0.1}s` }}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Back to top */}
                    <div className="detail-footer">
                        <button className="back-to-top" onClick={() => contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}>
                            Back to top &#8593;
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ProjectDetail;
