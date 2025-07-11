// ═══════════════════════════════════════════════════════════════
// JETON-INSPIRED LANDING PAGE ANIMATIONS
// Enhanced 3D disc animation with performance optimizations
// ═══════════════════════════════════════════════════════════════

class JetonAnimation {
    constructor() {
        this.discContainer = document.getElementById('discContainer');
        this.discs = document.querySelectorAll('.disc');
        this.isAnimating = true;
        this.animationId = null;
        this.mousePosition = { x: 0, y: 0 };
        this.targetRotation = { x: 0, y: 0 };
        this.currentRotation = { x: 0, y: 0 };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.startAnimation();
        this.optimizeForDevice();
    }
    
    setupEventListeners() {
        // Mouse movement interaction
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
        
        // Pause animation when page is not visible (performance optimization)
        document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
        
        // Touch interaction for mobile
        document.addEventListener('touchmove', this.handleTouchMove.bind(this));
        
        // Window resize handling
        window.addEventListener('resize', this.handleResize.bind(this));
        
        // Intersection Observer for performance
        this.setupIntersectionObserver();
    }
    
    handleMouseMove(event) {
        if (!this.discContainer) return;
        
        const rect = this.discContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate normalized mouse position relative to disc center
        this.mousePosition.x = (event.clientX - centerX) / (rect.width / 2);
        this.mousePosition.y = (event.clientY - centerY) / (rect.height / 2);
        
        // Limit the range of rotation
        this.targetRotation.x = Math.max(-30, Math.min(30, this.mousePosition.y * 20));
        this.targetRotation.y = Math.max(-30, Math.min(30, this.mousePosition.x * 20));
    }
    
    handleTouchMove(event) {
        if (!this.discContainer || event.touches.length === 0) return;
        
        const touch = event.touches[0];
        const rect = this.discContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        this.mousePosition.x = (touch.clientX - centerX) / (rect.width / 2);
        this.mousePosition.y = (touch.clientY - centerY) / (rect.height / 2);
        
        this.targetRotation.x = Math.max(-20, Math.min(20, this.mousePosition.y * 15));
        this.targetRotation.y = Math.max(-20, Math.min(20, this.mousePosition.x * 15));
    }
    
    handleVisibilityChange() {
        if (document.hidden) {
            this.pauseAnimation();
        } else {
            this.resumeAnimation();
        }
    }
    
    handleResize() {
        // Recalculate dimensions on resize
        this.optimizeForDevice();
    }
    
    setupIntersectionObserver() {
        if (!this.discContainer) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.resumeAnimation();
                } else {
                    this.pauseAnimation();
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(this.discContainer);
    }
    
    optimizeForDevice() {
        const isMobile = window.innerWidth < 768;
        const isLowEndDevice = this.detectLowEndDevice();
        
        if (isMobile || isLowEndDevice) {
            // Reduce animation complexity on mobile/low-end devices
            this.discs.forEach((disc, index) => {
                if (index > 2) {
                    disc.style.display = 'none';
                }
            });
        }
    }
    
    detectLowEndDevice() {
        // Simple performance detection
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (!gl) return true;
        
        const renderer = gl.getParameter(gl.RENDERER).toLowerCase();
        return renderer.includes('software') || renderer.includes('mesa');
    }
    
    startAnimation() {
        if (!this.isAnimating) return;
        
        this.animate();
    }
    
    animate() {
        if (!this.isAnimating || !this.discContainer) return;
        
        // Smooth interpolation for mouse-based rotation
        this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * 0.1;
        this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * 0.1;
        
        // Apply mouse-based rotation to the container
        if (Math.abs(this.currentRotation.x) > 0.1 || Math.abs(this.currentRotation.y) > 0.1) {
            this.discContainer.style.transform = `
                perspective(1000px) 
                rotateX(${this.currentRotation.x}deg) 
                rotateY(${this.currentRotation.y}deg)
            `;
        }
        
        this.animationId = requestAnimationFrame(this.animate.bind(this));
    }
    
    pauseAnimation() {
        this.isAnimating = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
    
    resumeAnimation() {
        if (!this.isAnimating) {
            this.isAnimating = true;
            this.startAnimation();
        }
    }
}

// ═══════════════════════════════════════════════════════════════
// ENHANCED UI INTERACTIONS
// ═══════════════════════════════════════════════════════════════

class UIEnhancements {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupScrollIndicator();
        this.setupDropdownHovers();
        this.setupButtonEffects();
        this.setupParallaxEffects();
    }
    
    setupScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (!scrollIndicator) return;
        
        scrollIndicator.addEventListener('click', () => {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    setupDropdownHovers() {
        const dropdownBtns = document.querySelectorAll('.dropdown-btn');
        
        dropdownBtns.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    setupButtonEffects() {
        const buttons = document.querySelectorAll('button');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-1px) scale(1.02)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0) scale(1)';
            });
            
            // Click ripple effect
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('div');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Add ripple animation to stylesheet
        if (!document.querySelector('#ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    setupParallaxEffects() {
        const orbs = document.querySelectorAll('.floating-orb');
        
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.02;
                const x = (mouseX - 0.5) * speed * 100;
                const y = (mouseY - 0.5) * speed * 100;
                
                orb.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }
}

// ═══════════════════════════════════════════════════════════════
// PERFORMANCE MONITORING
// ═══════════════════════════════════════════════════════════════

class PerformanceMonitor {
    constructor() {
        this.frameCount = 0;
        this.startTime = performance.now();
        this.lastTime = this.startTime;
        this.fps = 60;
        
        this.monitor();
    }
    
    monitor() {
        const currentTime = performance.now();
        this.frameCount++;
        
        if (currentTime - this.lastTime >= 1000) {
            this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
            this.frameCount = 0;
            this.lastTime = currentTime;
            
            // Adjust animation quality based on FPS
            this.adjustQuality();
        }
        
        requestAnimationFrame(this.monitor.bind(this));
    }
    
    adjustQuality() {
        const discStack = document.querySelector('.disc-stack');
        if (!discStack) return;
        
        if (this.fps < 30) {
            // Reduce animation complexity
            discStack.style.animationDuration = '20s';
            console.log('Performance: Reduced animation speed');
        } else if (this.fps > 50) {
            // Restore normal animation
            discStack.style.animationDuration = '15s';
        }
    }
}

// ═══════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    const jetonAnimation = new JetonAnimation();
    const uiEnhancements = new UIEnhancements();
    const performanceMonitor = new PerformanceMonitor();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('🚀 Jeton-inspired landing page loaded successfully!');
    console.log('📱 Responsive design active');
    console.log('🎭 3D animations initialized');
    console.log('⚡ Performance monitoring active');
});

// ═══════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    document.head.appendChild(script);
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Animation error:', e.error);
    // Fallback to static design if animations fail
    document.querySelectorAll('.disc').forEach(disc => {
        disc.style.animation = 'none';
    });
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { JetonAnimation, UIEnhancements, PerformanceMonitor };
}