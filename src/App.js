import React, { useState, useEffect, useCallback } from 'react';
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
    const [lightMode, setLightMode] = useState(false);

    const toggleTheme = useCallback(() => {
        setLightMode(prev => !prev);
    }, []);

    useEffect(() => {
        if (lightMode) {
            document.documentElement.classList.add('light-mode');
        } else {
            document.documentElement.classList.remove('light-mode');
        }
    }, [lightMode]);

    const handlePreloaderComplete = useCallback(() => {
        setLoading(false);
        setTimeout(() => {
            setFadeIn(true);
        }, 100);
    }, []);

    useEffect(() => {
        // Preloader runs for 3 seconds
        const timer = setTimeout(() => {
            handlePreloaderComplete();
        }, 3000);

        return () => clearTimeout(timer);
    }, [handlePreloaderComplete]);

    return (
        <div className={`App ${lightMode ? 'light-mode' : ''}`}>
            {loading && <Preloader onComplete={() => setLoading(false)} />}
            <div className={`main-content ${fadeIn ? 'fade-in' : ''}`}>
                <Navigation lightMode={lightMode} toggleTheme={toggleTheme} />
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
