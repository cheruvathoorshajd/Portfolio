import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import DesignHandoff from '../components/DesignHandoff';

const DevHome = () => {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
            <DesignHandoff />
        </main>
    );
};

export default DevHome;
