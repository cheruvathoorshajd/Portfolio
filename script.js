// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    // Preloader Animation
    function preloaderAnimation() {
        const greetingElement = document.querySelector('.greeting');
        const greetings = [
            ". שלום", // Hebrew
            ". Γεια σας", // Greek
            ". Ciao", // Italian
            ". 你好", // Chinese
            ". こんにちは", // Japanese
            ". Bonjour", // French
        ];
        
        let currentIndex = 0;
        
        const interval = setInterval(() => {
            if (currentIndex < greetings.length - 1) {
                // Fade out current greeting
                gsap.to(greetingElement, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        // Change text and fade in
                        currentIndex++;
                        greetingElement.textContent = greetings[currentIndex];
                        gsap.to(greetingElement, {
                            opacity: 1,
                            duration: 0.3
                        });
                    }
                });
            } else {
                clearInterval(interval);
                
                // Animate preloader out
                gsap.to('.preloader', {
                    duration: 1,
                    y: '-100%',
                    ease: 'power4.inOut',
                    onComplete: () => {
                        document.querySelector('.preloader').style.display = 'none';
                        // Start page animations
                        initPageAnimations();
                    }
                });
            }
        }, 400); // Show each greeting for 400ms
    }
    
    // Initialize page animations
    function initPageAnimations() {
        // Hero section animations
        const heroTl = gsap.timeline();
        
        heroTl.from('.main-title', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
        })
        .from('.subtitle', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power4.out'
        }, '-=0.6')
        .from('.hero-description p', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power4.out'
        }, '-=0.4')
        .from('.scroll-indicator', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power4.out'
        }, '-=0.2');
        
        // Section headers animation
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power4.out'
            });
        });
        
        // About section animation
        gsap.from('.about-text p', {
            scrollTrigger: {
                trigger: '.about-text',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power4.out'
        });
        
        gsap.from('.about-image .img-placeholder', {
            scrollTrigger: {
                trigger: '.about-image',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power4.out'
        });
        
        // Project showcase animations
        gsap.utils.toArray('.project-item').forEach((project, index) => {
            // Set initial state
            gsap.set(project, {
                opacity: 0,
                y: 100
            });
            
            // Create staggered animation for each project
            const projectTl = gsap.timeline({
                scrollTrigger: {
                    trigger: project,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                }
            });
            
            projectTl.to(project, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power4.out'
            });
            
            // Animate project elements
            const title = project.querySelector('.project-title');
            const category = project.querySelector('.project-category');
            const image = project.querySelector('.img-placeholder');
            const viewButton = project.querySelector('.view-button');
            
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power3.out'
            });
            
            gsap.from(category, {
                scrollTrigger: {
                    trigger: category,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                x: -30,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                ease: 'power3.out'
            });
            
            gsap.from(image, {
                scrollTrigger: {
                    trigger: image,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                scale: 0.9,
                opacity: 0,
                duration: 1,
                delay: 0.1,
                ease: 'power3.out'
            });
            
            gsap.from(viewButton, {
                scrollTrigger: {
                    trigger: viewButton,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                scale: 0,
                opacity: 0,
                duration: 0.6,
                delay: 0.5,
                ease: 'back.out(1.7)'
            });
        });
        
        // Parallax effect for project images
        gsap.utils.toArray('.project-image .img-placeholder').forEach(image => {
            gsap.to(image, {
                scrollTrigger: {
                    trigger: image,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                },
                y: 100,
                ease: 'none'
            });
        });
        
        // Contact section animation
        gsap.from('.contact-content p', {
            scrollTrigger: {
                trigger: '.contact-content',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power4.out'
        });
        
        gsap.from('.primary-link', {
            scrollTrigger: {
                trigger: '.primary-link',
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power4.out'
        });
        
        gsap.from('.social-links a', {
            scrollTrigger: {
                trigger: '.social-links',
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power4.out'
        });
    }
    
    // Menu toggle functionality
    const menuButton = document.querySelector('.menu-button');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    // Add data-index to menu links for staggered animation
    menuLinks.forEach((link, index) => {
        link.closest('li').style.setProperty('--i', index);
    });
    
    menuButton.addEventListener('click', () => {
        menuOverlay.classList.toggle('active');
        
        if (menuOverlay.classList.contains('active')) {
            menuButton.textContent = 'Close';
        } else {
            menuButton.textContent = 'Explore';
        }
    });
    
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
            menuButton.textContent = 'Explore';
        });
    });
    
    // Magnetic button effect
    const magneticButtons = document.querySelectorAll('.magnetic-button, .view-button');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
            
            gsap.to(this, {
                duration: 0.3,
                x: x,
                y: y,
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });
    
    // Project hover effect
    document.querySelectorAll('.project-item').forEach(project => {
        const image = project.querySelector('.img-placeholder');
        const viewButton = project.querySelector('.view-button');
        
        project.addEventListener('mouseenter', () => {
            gsap.to(image, {
                duration: 0.5,
                scale: 1.05,
                ease: 'power2.out'
            });
            
            gsap.to(viewButton, {
                duration: 0.3,
                scale: 1.1,
                ease: 'power2.out'
            });
        });
        
        project.addEventListener('mouseleave', () => {
            gsap.to(image, {
                duration: 0.5,
                scale: 1,
                ease: 'power2.out'
            });
            
            gsap.to(viewButton, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
    
    // Start preloader
    preloaderAnimation();
});
