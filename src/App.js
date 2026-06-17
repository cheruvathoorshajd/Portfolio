import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import DesignHome from './pages/DesignHome';
import DevHome from './pages/DevHome';
import './styles/App.css';

const SESSION_PRELOAD_KEY = 'ds_preloaded_v1';

function App() {
    // Gate the preloader on first visit per session to avoid firing on every route change
    const initiallyShouldPreload =
        typeof window !== 'undefined' && !window.sessionStorage.getItem(SESSION_PRELOAD_KEY);

    const [loading, setLoading] = useState(initiallyShouldPreload);
    const [fadeIn, setFadeIn] = useState(!initiallyShouldPreload);
    const [lightMode, setLightMode] = useState(false);

    const toggleTheme = useCallback(() => {
        setLightMode((prev) => !prev);
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
        if (typeof window !== 'undefined') {
            window.sessionStorage.setItem(SESSION_PRELOAD_KEY, '1');
        }
        setTimeout(() => {
            setFadeIn(true);
        }, 100);
    }, []);

    useEffect(() => {
        if (!loading) return;
        const timer = setTimeout(() => {
            handlePreloaderComplete();
        }, 3000);
        return () => clearTimeout(timer);
    }, [loading, handlePreloaderComplete]);

    // Custom scrollbar: add .is-scrolling to <html> while user scrolls;
    // remove after 1.5s of inactivity. CSS fades the thumb in/out.
    useEffect(() => {
        let timeout;
        const handleScroll = () => {
            document.documentElement.classList.add('is-scrolling');
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                document.documentElement.classList.remove('is-scrolling');
            }, 1500);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className={`App ${lightMode ? 'light-mode' : ''}`}>
                {loading && <Preloader onComplete={handlePreloaderComplete} />}
                <div className={`main-content ${fadeIn ? 'fade-in' : ''}`}>
                    <Navigation lightMode={lightMode} toggleTheme={toggleTheme} />
                    <Routes>
                        <Route path="/" element={<DesignHome />} />
                        <Route path="/dev" element={<DevHome />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                    <Footer />
                </div>
                <BackToTop />
            </div>
        </BrowserRouter>
    );
}

export default App;
