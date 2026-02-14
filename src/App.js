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
