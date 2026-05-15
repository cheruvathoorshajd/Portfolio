import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';

const Navigation = ({ lightMode, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showIcon, setShowIcon] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowIcon(prev => !prev);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleNavClick = (e, target) => {
        e.preventDefault();
        closeMenu();

        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <div className="logo" onClick={toggleTheme} title="Toggle theme">
                        <span className={`logo-ds ${showIcon ? 'hidden' : 'visible'}`}>DS</span>
                        <svg className={`theme-icon ${showIcon ? 'visible' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    </div>
                    <button
                        className="menu-button"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? 'Close' : 'Explore'}
                    </button>
                </div>
            </nav>

            <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                <div className="menu-container">
                    <ul className="menu-links">
                        <li style={{ '--i': 0 }}>
                            <a
                                href="https://drive.google.com/file/d/1SHyL1IOVSYLC_IwNTqRpUccGjPF27kC0/view?usp=sharing"
                                className="menu-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                            >
                                Resume
                            </a>
                        </li>
                        <li style={{ '--i': 1 }}>
                            <a
                                href="#work"
                                className="menu-link"
                                onClick={(e) => handleNavClick(e, '#work')}
                            >
                                Projects
                            </a>
                        </li>
                        <li style={{ '--i': 2 }}>
                            <a
                                href="https://cheruvathoor.my.canva.site/photography-portfolio"
                                className="menu-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                            >
                                Avocations
                            </a>
                        </li>
                        <li style={{ '--i': 3 }}>
                            <a
                                href="#contact"
                                className="menu-link"
                                onClick={(e) => handleNavClick(e, '#contact')}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navigation;
