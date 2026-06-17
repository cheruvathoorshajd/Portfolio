import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll position to the top whenever the route changes.
 * React Router preserves scroll across navigations by default, which
 * causes /dev to land mid-page if the visitor was scrolled on /.
 *
 * Uses the legacy two-arg scrollTo so the jump is instant (the
 * `scroll-behavior: smooth` rule on <html> would otherwise animate it).
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
        html.style.scrollBehavior = prev;
    }, [pathname]);

    return null;
};

export default ScrollToTop;
