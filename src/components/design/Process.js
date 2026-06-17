import React, { useEffect, useRef } from 'react';
import { PROCESS_STEPS } from '../../constants';
import '../../styles/design/Process.css';

const Process = () => {
    const sectionRef = useRef(null);
    const introRef = useRef(null);
    const gridRef = useRef(null);
    const stepRefs = useRef([]);

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
        if (introRef.current) observer.observe(introRef.current);
        if (gridRef.current) observer.observe(gridRef.current);
        stepRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="process" className="process-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="section-number">03</span>
                    <h2>Process</h2>
                </div>

                <p className="process-intro" ref={introRef}>
                    My process is research-led but pragmatic. I move fast through divergence and slow
                    through synthesis — because the cost of solving the wrong problem is always higher
                    than the cost of one more interview. Every step ends with an artifact a teammate can
                    use without me in the room.
                </p>

                <div className="process-grid" ref={gridRef}>
                    {PROCESS_STEPS.map((step, i) => (
                        <div
                            key={step.number}
                            className="process-step"
                            ref={(el) => (stepRefs.current[i] = el)}
                        >
                            <span className="process-step-number">STEP {step.number}</span>
                            <h3 className="process-step-title">{step.title}</h3>
                            <p className="process-step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
