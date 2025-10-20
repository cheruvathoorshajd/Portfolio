import React, { useState, useEffect } from 'react';
import { GREETINGS } from '../constants';
import '../styles/Preloader.css';

const Preloader = ({ onComplete }) => {
    const [currentGreeting, setCurrentGreeting] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const [greetingFade, setGreetingFade] = useState(true);

    useEffect(() => {
        const greetingInterval = setInterval(() => {
            if (currentGreeting < GREETINGS.length - 1) {
                // Fade out current greeting
                setGreetingFade(false);

                setTimeout(() => {
                    setCurrentGreeting(prev => prev + 1);
                    // Fade in next greeting
                    setGreetingFade(true);
                }, 300);
            } else {
                clearInterval(greetingInterval);
                setTimeout(() => {
                    setFadeOut(true);
                    setTimeout(() => {
                        onComplete();
                    }, 1200);
                }, 500);
            }
        }, 600);

        return () => clearInterval(greetingInterval);
    }, [currentGreeting, onComplete]);

    return (
        <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
            <div className="greeting-container">
                <h1 className={`greeting ${greetingFade ? 'greeting-fade-in' : 'greeting-fade-out'}`}>
                    {GREETINGS[currentGreeting]}
                </h1>
            </div>
        </div>
    );
};

export default Preloader;
