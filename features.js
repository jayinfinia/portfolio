// ═══════════════════════════════════════════════════════════════
// FEATURES PAGE - ADVANCED ANIMATIONS & INTERACTIONS
// Enhanced scroll effects, 3D interactions, and performance optimization
// ═══════════════════════════════════════════════════════════════

class FeaturesPageController {
    constructor() {
        this.scrollY = 0;
        this.ticking = false;
        this.cards = document.querySelectorAll('.feature-card');
        this.cube = document.querySelector('.floating-cube');
        this.particles = document.querySelectorAll('.cta-particle');
        this.nav = document.querySelector('nav');
        
        this.init();
    }
    
    init() {
        this.setupScrollEffects();
        this.setupCardInteractions();
        this.setupCubeAnimation();
        this.setupNavigationEffects();
        this.setupIntersectionObserver();
        this.setupParallaxEffects();
        this.optimizeForDevice();
    }
    
    setupScrollEffects() {
        window.addEventListener('scroll', () => {
            this.scrollY = window.scrollY;
            
            if (!this.ticking) {
                requestAnimationFrame(() => {
                    this.updateScrollEffects();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        });
    }
    
    updateScrollEffects() {
        // Navigation background effect
        if (this.nav) {
            if (this.scrollY > 50) {
                this.nav.classList.add('scrolled');
            } else {
                this.nav.classList.remove('scrolled');
            }
        }
        
        // Parallax effect for cube
        if (this.cube) {
            const parallaxSpeed = 0.5;
            this.cube.style.transform = `translateY(${this.scrollY * parallaxSpeed}px)`;
        }
        
        // Particles parallax
        this.particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.3;
            particle.style.transform = `translateY(${this.scrollY * speed}px)`;
        });
    }
    
    setupCardInteractions() {
        this.cards.forEach((card, index) => {
            // Mouse move effect
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `
                    translateY(-12px) 
                    scale(1.02) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg)
                `;
            });
            
            // Reset on mouse leave
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
            
            // Click ripple effect
            card.addEventListener('click', (e) => {
                this.createRippleEffect(e, card);
            });
            
            // Staggered animation on load
            setTimeout(() => {
                card.classList.add('loading');
            }, index * 100);
        });
    }
    
    createRippleEffect(event, element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleExpand 0.8s ease-out;
            pointer-events: none;
            z-index: 10;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 800);
    }
    
    setupCubeAnimation() {
        if (!this.cube) return;
        
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;
        
        // Mouse interaction
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
            
            targetX = mouseX * 20;
            targetY = mouseY * 20;
        });
        
        // Smooth animation loop
        const animateCube = () => {
            currentX += (targetX - currentX) * 0.05;
            currentY += (targetY - currentY) * 0.05;
            
            if (this.cube) {
                this.cube.style.transform = `
                    rotateX(${currentY}deg) 
                    rotateY(${currentX}deg)
                `;
            }
            
            requestAnimationFrame(animateCube);
        };
        
        animateCube();
    }
    
    setupNavigationEffects() {
        const navLinks = document.querySelectorAll('nav a');
        
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-2px)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
            });
        });
    }
    
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe cards and other elements
        this.cards.forEach(card => {
            card.classList.add('scroll-reveal');
            observer.observe(card);
        });
        
        // Observe other sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });
    }
    
    setupParallaxEffects() {
        const orbs = document.querySelectorAll('.hero-orb');
        
        window.addEventListener('scroll', () => {
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.2;
                const yPos = -(this.scrollY * speed);
                orb.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    optimizeForDevice() {
        const isMobile = window.innerWidth < 768;
        const isLowEndDevice = this.detectLowEndDevice();
        
        if (isMobile || isLowEndDevice) {
            // Disable heavy animations on mobile/low-end devices
            document.querySelectorAll('.hero-orb').forEach(orb => {
                orb.style.display = 'none';
            });
            
            // Simplify cube animation
            if (this.cube) {
                this.cube.style.animationDuration = '20s';
            }
        }
    }
    
    detectLowEndDevice() {
        // Simple performance detection
        return navigator.hardwareConcurrency < 4 || navigator.deviceMemory < 4;
    }
}

// ═══════════════════════════════════════════════════════════════
// ADVANCED UI ENHANCEMENTS
// ═══════════════════════════════════════════════════════════════

class UIEnhancements {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupButtonEffects();
        this.setupFormAnimations();
        this.setupScrollToTop();
        this.setupKeyboardNavigation();
    }
    
    setupButtonEffects() {
        const buttons = document.querySelectorAll('button');
        
        buttons.forEach(button => {
            // Magnetic effect
            button.addEventListener('mouseenter', (e) => {
                button.style.transform = 'translateY(-2px) scale(1.02)';
            });
            
            button.addEventListener('mouseleave', (e) => {
                button.style.transform = 'translateY(0) scale(1)';
            });
            
            // Enhanced click effect
            button.addEventListener('mousedown', (e) => {
                button.style.transform = 'translateY(0) scale(0.98)';
            });
            
            button.addEventListener('mouseup', (e) => {
                button.style.transform = 'translateY(-2px) scale(1.02)';
            });
        });
    }
    
    setupFormAnimations() {
        const inputs = document.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });
    }
    
    setupScrollToTop() {
        const scrollToTop = document.createElement('button');
        scrollToTop.innerHTML = '↑';
        scrollToTop.className = 'scroll-to-top';
        scrollToTop.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #ef4444 0%, #fb923c 100%);
            color: white;
            border: none;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            opacity: 0;
            transform: translateY(100px);
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 20px rgba(239, 68, 68, 0.3);
        `;
        
        document.body.appendChild(scrollToTop);
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollToTop.style.opacity = '1';
                scrollToTop.style.transform = 'translateY(0)';
            } else {
                scrollToTop.style.opacity = '0';
                scrollToTop.style.transform = 'translateY(100px)';
            }
        });
        
        scrollToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    setupKeyboardNavigation() {
        // Enhanced focus management
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }
}

// ═══════════════════════════════════════════════════════════════
// PERFORMANCE MONITORING & OPTIMIZATION
// ═══════════════════════════════════════════════════════════════

class PerformanceOptimizer {
    constructor() {
        this.frameCount = 0;
        this.startTime = performance.now();
        this.lastTime = this.startTime;
        this.fps = 60;
        this.isOptimized = false;
        
        this.monitor();
    }
    
    monitor() {
        const currentTime = performance.now();
        this.frameCount++;
        
        if (currentTime - this.lastTime >= 1000) {
            this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
            this.frameCount = 0;
            this.lastTime = currentTime;
            
            this.optimizeBasedOnPerformance();
        }
        
        requestAnimationFrame(this.monitor.bind(this));
    }
    
    optimizeBasedOnPerformance() {
        if (this.fps < 30 && !this.isOptimized) {
            this.enablePerformanceMode();
            this.isOptimized = true;
            console.log('🔧 Performance mode enabled');
        } else if (this.fps > 50 && this.isOptimized) {
            this.disablePerformanceMode();
            this.isOptimized = false;
            console.log('🚀 Full quality mode restored');
        }
    }
    
    enablePerformanceMode() {
        // Reduce animation complexity
        document.querySelectorAll('.floating-cube').forEach(cube => {
            cube.style.animationDuration = '24s';
        });
        
        // Disable some particle effects
        document.querySelectorAll('.cta-particle').forEach(particle => {
            particle.style.display = 'none';
        });
        
        // Reduce card hover effects
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.transition = 'all 0.2s ease';
        });
    }
    
    disablePerformanceMode() {
        // Restore original animations
        document.querySelectorAll('.floating-cube').forEach(cube => {
            cube.style.animationDuration = '12s';
        });
        
        document.querySelectorAll('.cta-particle').forEach(particle => {
            particle.style.display = 'block';
        });
        
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    }
}

// ═══════════════════════════════════════════════════════════════
// INITIALIZATION & ERROR HANDLING
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize all components
        const featuresController = new FeaturesPageController();
        const uiEnhancements = new UIEnhancements();
        const performanceOptimizer = new PerformanceOptimizer();
        
        // Add page transition effect
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
        
        // Add ripple animation styles
        if (!document.querySelector('#features-animations')) {
            const style = document.createElement('style');
            style.id = 'features-animations';
            style.textContent = `
                @keyframes rippleExpand {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
                
                .keyboard-navigation button:focus,
                .keyboard-navigation a:focus {
                    outline: 2px solid rgba(239, 68, 68, 0.5);
                    outline-offset: 2px;
                }
                
                .scroll-to-top:hover {
                    transform: translateY(-2px) scale(1.05);
                    box-shadow: 0 6px 25px rgba(239, 68, 68, 0.4);
                }
            `;
            document.head.appendChild(style);
        }
        
        console.log('🎉 Features page loaded successfully!');
        console.log('📱 Responsive design active');
        console.log('🎭 3D cube animation initialized');
        console.log('⚡ Performance monitoring active');
        console.log('🎯 Interactive cards ready');
        
    } catch (error) {
        console.error('❌ Error initializing features page:', error);
        
        // Fallback to basic functionality
        document.body.classList.add('fallback-mode');
    }
});

// ═══════════════════════════════════════════════════════════════
// ERROR HANDLING & GRACEFUL DEGRADATION
// ═══════════════════════════════════════════════════════════════

window.addEventListener('error', (e) => {
    console.error('🚨 Features page error:', e.error);
    
    // Disable animations on error
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
});

// Intersection Observer polyfill for older browsers
if (!('IntersectionObserver' in window)) {
    const script = document.createElement('script');
    script.src = 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver';
    document.head.appendChild(script);
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        FeaturesPageController, 
        UIEnhancements, 
        PerformanceOptimizer 
    };
}