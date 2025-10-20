import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
    const [loading, setLoading] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Simulate preloader timing
        const timer = setTimeout(() => {
            setLoading(false);
            // Trigger fade-in animation for main content
            setTimeout(() => {
                setFadeIn(true);
            }, 100);
        }, 3000); // 3 seconds for preloader

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            {loading && <Preloader onComplete={() => setLoading(false)} />}
            <div className={`main-content ${fadeIn ? 'fade-in' : ''}`}>
                <Navigation />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
