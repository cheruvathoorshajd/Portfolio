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
        tagline: 'A Business Workspace for Small Teams — Full-Stack TypeScript on One Shared Contract',
        duration: '2026',
        semester: 'Self-Initiated, Full-Stack SaaS',
        program: "Master's in Information System",
        summary: [
            'BizzNex is a business workspace for small teams: projects and tasks, a CRM with contacts, companies, activities and a Lead → Qualified → Proposal → Won → Lost deal pipeline, seven marketing and productivity tools (calculator, notes, publisher, newsletter, events, notifications, and an assistant), plus onboarding, account settings, data export and account deletion. Everything persists to PostgreSQL, and the dashboard computes its metrics live from real data, including a lazy-loaded three.js Relationship Globe.',
            'It is an npm-workspaces monorepo — apps/web, apps/api and packages/shared — where one package of TypeScript types and Zod schemas is the single source of truth: the NestJS API validates with it and the React client types against it, so a renamed field breaks both sides at compile time. The API is 17 controllers following one module pattern (JwtAuthGuard + @CurrentUser() + ZodValidationPipe) over 12 Prisma models, behind a global rate limiter and a single exception filter. The front end uses Redux Toolkit + RTK Query for all server state and a hand-built component layer that replaced Fluent UI, MUI, framer-motion and styled-components — about 83 kB gzipped for the app itself.',
            'It ships like production software: versioned Prisma migrations applied on boot, 82 unit tests and 6 Postgres-backed e2e tests, GitHub Actions CI that also builds and boots both Docker images, and a free, always-on deployment on Render + Neon behind Cloudflare at bizznex.cheruvathoor.com.'
        ],
        highlights: [
            {
                title: 'Tenant isolation that covers links',
                desc: 'All 11 content models cascade from User and every query is scoped by the JWT userId. Ownership checks also cover foreign keys — a deal can only point at your contact and company — and e2e tests prove another account\'s records can\'t be read, edited, deleted or linked.'
            },
            {
                title: 'Revocable stateless sessions',
                desc: 'The JWT carries a tokenVersion that the Passport strategy re-checks on every request. A password change bumps it, signing every other session out while the current one continues on a fresh token.'
            },
            {
                title: 'A shared demo that can\'t be wrecked',
                desc: 'The first demo sign-in after 30 minutes rebuilds the workspace in one transaction under a Postgres advisory lock, so only one API instance resets at a time, and signs out sessions still open on the old data.'
            },
            {
                title: 'Hardening',
                desc: 'helmet headers, a 256 kB body limit, 300 req/min globally and 10 req/min on auth-sensitive routes, origin-locked CORS, and fail-closed boot when JWT_SECRET or CORS_ORIGIN is missing. Prisma errors map to proper statuses (P2002 → 409, P2003 → 400, P2025 → 404) without leaking internals, and a build-time hashed Content-Security-Policy holds on any host.'
            },
            {
                title: 'Local, key-free assistant',
                desc: '"Brenda" answers from your own data — pipeline value by stage, open tasks by due date, outstanding activities — through Prisma queries and intent matching. No external API, no keys, no network calls.'
            },
            {
                title: 'Studio windowing model',
                desc: 'Tools open full-page inline on left-click or as draggable, resizable, minimizable windows on right-click, with cascade placement, z-order and a dock. Window geometry stays local so pointer-move never re-renders the tree, and windows get a separate compact widget because a shrunk full page broke the layout.'
            },
            {
                title: 'Failure states designed in',
                desc: 'Load errors with Retry, optimistic moves that roll back, locked buttons while saving, readable API errors, confirm dialogs that name what a delete takes with it, and reduced-motion support throughout.'
            },
            {
                title: 'Testing, CI & deployment',
                desc: 'CI runs migrations on a Postgres 16 service, then typecheck → lint → unit → build → e2e, then builds both images and boots the API in production mode. Render deploys from the same Dockerfile; a cron pinger hits /health/live (no DB query) so the API stays awake while Neon still scales to zero, and TRUST_PROXY=3 was measured live so each visitor gets their own rate limit.'
            }
        ],
        tech: ['React 18', 'TypeScript', 'Vite', 'Redux Toolkit', 'RTK Query', 'Sass', 'three.js', 'NestJS 11', 'Prisma', 'PostgreSQL', 'Zod', 'Passport JWT', 'Swagger', 'Jest', 'Vitest', 'Docker', 'nginx', 'GitHub Actions', 'Render', 'Neon'],
        links: [
            { label: 'View live app', href: 'https://bizznex.cheruvathoor.com' },
            { label: 'Read case study', href: 'https://bizznex.cheruvathoor.com/case-study.html' }
        ]
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
    }
};

const ProjectDetail = ({ project, onClose }) => {
    const overlayRef = useRef(null);
    const contentRef = useRef(null);
    const details = projectDetails[project.title];
    const projectLabel = project.number || String(Object.keys(projectDetails).indexOf(project.title) + 1).padStart(2, '0');

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
                        <span className="detail-label">Project {projectLabel}</span>
                        <h1 className="detail-title">{project.title}</h1>
                        <div className="detail-title-line"></div>
                        <p className="detail-tagline">"{details.tagline}"</p>
                        <div className="detail-hero-meta">
                            <span className="hero-meta-pill">{details.program}</span>
                            <span className="hero-meta-pill">{details.duration}</span>
                        </div>
                    </div>
                </div>

                <div className="detail-body">
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

                        {details.highlights && (
                            <div className="detail-highlights">
                                <div className="section-header-row">
                                    <span className="section-accent-line"></span>
                                    <h2 className="detail-section-title">Engineering Highlights</h2>
                                </div>
                                <div className="detail-highlights-grid">
                                    {details.highlights.map((h, i) => (
                                        <div key={i} className="detail-highlight" style={{ animationDelay: `${0.7 + i * 0.08}s` }}>
                                            <span className="detail-highlight-number">{String(i + 1).padStart(2, '0')}</span>
                                            <h3 className="detail-highlight-title">{h.title}</h3>
                                            <p className="detail-highlight-desc">{h.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

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

                        {details.links && (
                            <div className="detail-links">
                                {details.links.map((l) => (
                                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="detail-link">
                                        {l.label} <span aria-hidden="true">↗</span>
                                    </a>
                                ))}
                            </div>
                        )}
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
