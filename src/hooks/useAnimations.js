import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - Intersection Observer options
 * @returns {Array} - [ref, isVisible]
 */
export const useScrollAnimation = (options = {}) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optionally unobserve after first intersection
                    if (options.once !== false) {
                        observer.unobserve(entry.target);
                    }
                } else if (options.once === false) {
                    setIsVisible(false);
                }
            },
            {
                threshold: options.threshold || 0.2,
                rootMargin: options.rootMargin || '0px',
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options.threshold, options.rootMargin, options.once]);

    return [elementRef, isVisible];
};

/**
 * Custom hook for magnetic button effect
 * @returns {Object} - { handleMouseMove, handleMouseLeave, position }
 */
export const useMagneticEffect = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e, element) => {
        const rect = element.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return { handleMouseMove, handleMouseLeave, position };
};
