import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';
import '../styles/Navigation.css';

const Navigation = ({ lightMode, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const location = useLocation();
    const isDev = location.pathname.startsWith('/dev');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowIcon((prev) => !prev);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleAnchorClick = (e, target) => {
        e.preventDefault();
        closeMenu();
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const menuItems = isDev
        ? [
              { type: 'external', label: 'Resume', href: PERSONAL_INFO.resume },
              { type: 'anchor', label: 'Academics', target: '#academics' },
              { type: 'anchor', label: 'Projects', target: '#work' },
              {
                  type: 'external',
                  label: 'Avocations',
                  href: 'https://cheruvathoor.my.canva.site/photography-portfolio'
              },
              { type: 'anchor', label: 'Contact', target: '#contact' },
              { type: 'route', label: '← Design Work', to: '/' }
          ]
        : [
              { type: 'external', label: 'Resume', href: PERSONAL_INFO.resume },
              { type: 'anchor', label: 'Case Studies', target: '#case-studies' },
              { type: 'anchor', label: 'Process', target: '#process' },
              { type: 'anchor', label: 'Contact', target: '#contact' },
              { type: 'route', label: 'Engineering →', to: '/dev' }
          ];

    return (
        <>
            <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <div className="logo" onClick={toggleTheme} title="Toggle theme">
                        <span className={`logo-ds ${showIcon ? 'hidden' : 'visible'}`}>DS</span>
                        <svg
                            className={`theme-icon ${showIcon ? 'visible' : 'hidden'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
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
                    <button className="menu-button" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? 'Close' : 'Explore'}
                    </button>
                </div>
            </nav>

            <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                <div className="menu-container">
                    <ul className="menu-links">
                        {menuItems.map((item, i) => (
                            <li key={i} style={{ '--i': i }}>
                                {item.type === 'external' && (
                                    <a
                                        href={item.href}
                                        className="menu-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={closeMenu}
                                    >
                                        {item.label}
                                    </a>
                                )}
                                {item.type === 'anchor' && (
                                    <a
                                        href={item.target}
                                        className="menu-link"
                                        onClick={(e) => handleAnchorClick(e, item.target)}
                                    >
                                        {item.label}
                                    </a>
                                )}
                                {item.type === 'route' && (
                                    <Link to={item.to} className="menu-link" onClick={closeMenu}>
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navigation;
