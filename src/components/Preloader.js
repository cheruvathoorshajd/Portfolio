import React, { useState, useEffect } from 'react';
import { GREETINGS } from '../constants';
import '../styles/Preloader.css';

const Preloader = ({ onComplete }) => {
    const [currentGreeting, setCurrentGreeting] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const [greetingFade, setGreetingFade] = useState(true);

    useEffect(() => {
        let greetingInterval;
        let timeoutId1, timeoutId2, timeoutId3;

        const startGreetings = () => {
            greetingInterval = setInterval(() => {
                setCurrentGreeting(prev => {
                    const nextGreeting = prev + 1;
                    
                    if (nextGreeting < GREETINGS.length) {
                        // Fade out current greeting
                        setGreetingFade(false);
                        
                        timeoutId1 = setTimeout(() => {
                            // Fade in next greeting
                            setGreetingFade(true);
                        }, 300);
                    } else {
                        // All greetings done
                        clearInterval(greetingInterval);
                        timeoutId2 = setTimeout(() => {
                            setFadeOut(true);
                            timeoutId3 = setTimeout(() => {
                                onComplete();
                            }, 1200);
                        }, 500);
                    }
                    
                    return nextGreeting;
                });
            }, 600);
        };

        startGreetings();

        return () => {
            clearInterval(greetingInterval);
            clearTimeout(timeoutId1);
            clearTimeout(timeoutId2);
            clearTimeout(timeoutId3);
        };
    }, [onComplete]);

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
