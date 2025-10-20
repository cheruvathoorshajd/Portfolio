import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
                    <div className="logo">DS</div>
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
                                href="https://drive.google.com/file/d/1MCGopgWRm_wx6UcyJp4G_KgLeZFkk_lZ/view?usp=sharing"
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
