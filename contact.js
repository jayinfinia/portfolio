// ═══════════════════════════════════════════════════════════════
// CONTACT PAGE - ADVANCED FORM INTERACTIONS
// Modern contact form with validation, animations, and UX enhancements
// ═══════════════════════════════════════════════════════════════

class ContactPageController {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.submitBtn = document.querySelector('.submit-btn');
        this.successMessage = document.getElementById('successMessage');
        this.faqItems = document.querySelectorAll('.faq-item');
        this.formInputs = document.querySelectorAll('.form-input');
        this.contactMethods = document.querySelectorAll('.contact-method');
        
        this.init();
    }
    
    init() {
        this.setupFormValidation();
        this.setupFormSubmission();
        this.setupFAQInteractions();
        this.setupScrollAnimations();
        this.setupContactMethodInteractions();
        this.setupFormAnimations();
        this.setupAutoResize();
    }
    
    setupFormValidation() {
        this.formInputs.forEach(input => {
            // Real-time validation
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearFieldError(input);
                this.updateSubmitButton();
            });
            
            // Enhanced focus effects
            input.addEventListener('focus', () => {
                this.addFocusEffect(input);
            });
        });
    }
    
    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';
        
        // Remove existing errors
        this.clearFieldError(field);
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = `${this.getFieldLabel(fieldName)} is required`;
        }
        
        // Email validation
        if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Name validation
        if (fieldName === 'name' && value && value.length < 2) {
            isValid = false;
            errorMessage = 'Name must be at least 2 characters long';
        }
        
        // Message validation
        if (fieldName === 'message' && value && value.length < 10) {
            isValid = false;
            errorMessage = 'Message must be at least 10 characters long';
        }
        
        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }
        
        return isValid;
    }
    
    showFieldError(field, message) {
        const formGroup = field.closest('.form-group');
        let errorElement = formGroup.querySelector('.field-error');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.style.cssText = `
                color: #ef4444;
                font-size: 14px;
                margin-top: 4px;
                opacity: 0;
                transform: translateY(-10px);
                transition: all 0.3s ease;
            `;
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        setTimeout(() => {
            errorElement.style.opacity = '1';
            errorElement.style.transform = 'translateY(0)';
        }, 10);
        
        field.classList.add('error');
        formGroup.classList.add('has-error');
    }
    
    clearFieldError(field) {
        const formGroup = field.closest('.form-group');
        const errorElement = formGroup.querySelector('.field-error');
        
        if (errorElement) {
            errorElement.style.opacity = '0';
            errorElement.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                errorElement.remove();
            }, 300);
        }
        
        field.classList.remove('error');
        formGroup.classList.remove('has-error');
    }
    
    getFieldLabel(fieldName) {
        const labels = {
            name: 'Full Name',
            email: 'Email Address',
            company: 'Company',
            subject: 'Subject',
            message: 'Message'
        };
        return labels[fieldName] || fieldName;
    }
    
    addFocusEffect(field) {
        const formGroup = field.closest('.form-group');
        formGroup.classList.add('focused');
    }
    
    updateSubmitButton() {
        const requiredFields = Array.from(this.formInputs).filter(input => 
            input.hasAttribute('required')
        );
        
        const allValid = requiredFields.every(field => 
            field.value.trim() && this.validateField(field)
        );
        
        if (allValid) {
            this.submitBtn.classList.add('ready');
            this.submitBtn.disabled = false;
        } else {
            this.submitBtn.classList.remove('ready');
            this.submitBtn.disabled = true;
        }
    }
    
    setupFormSubmission() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleFormSubmission();
        });
    }
    
    async handleFormSubmission() {
        // Validate all fields
        const isFormValid = Array.from(this.formInputs).every(field => 
            this.validateField(field)
        );
        
        if (!isFormValid) {
            this.shakeForm();
            return;
        }
        
        // Show loading state
        this.setLoadingState(true);
        
        try {
            // Simulate API call
            await this.submitFormData();
            this.showSuccessMessage();
            this.resetForm();
        } catch (error) {
            this.showErrorMessage(error.message);
        } finally {
            this.setLoadingState(false);
        }
    }
    
    async submitFormData() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Log form data (in real app, send to backend)
        console.log('Form submitted:', data);
        
        // Simulate random success/failure for demo
        if (Math.random() > 0.1) {
            return { success: true };
        } else {
            throw new Error('Server error. Please try again.');
        }
    }
    
    setLoadingState(loading) {
        if (loading) {
            this.submitBtn.classList.add('loading');
            this.submitBtn.disabled = true;
        } else {
            this.submitBtn.classList.remove('loading');
            this.submitBtn.disabled = false;
        }
    }
    
    showSuccessMessage() {
        this.successMessage.classList.add('show');
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            this.successMessage.classList.remove('show');
        }, 5000);
        
        // Add confetti effect
        this.addConfettiEffect();
    }
    
    showErrorMessage(message) {
        // Create or update error message
        let errorElement = document.querySelector('.error-message');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.style.cssText = `
                background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                color: white;
                padding: 16px 20px;
                border-radius: 12px;
                margin-top: 16px;
                display: flex;
                align-items: center;
                gap: 12px;
                animation: slideUp 0.5s ease-out;
            `;
            this.submitBtn.parentNode.appendChild(errorElement);
        }
        
        errorElement.innerHTML = `
            <svg class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>${message}</span>
        `;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            errorElement.remove();
        }, 5000);
    }
    
    addConfettiEffect() {
        // Simple confetti animation
        for (let i = 0; i < 20; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: ${['#ef4444', '#fb923c', '#fbbf24', '#34d399'][Math.floor(Math.random() * 4)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${Math.random() * 100}vw;
                top: -10px;
                animation: confettiFall ${2 + Math.random() * 2}s ease-out forwards;
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }
    }
    
    shakeForm() {
        this.form.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            this.form.style.animation = '';
        }, 500);
    }
    
    resetForm() {
        this.form.reset();
        this.formInputs.forEach(field => {
            this.clearFieldError(field);
            field.closest('.form-group').classList.remove('focused');
        });
        this.updateSubmitButton();
    }
    
    setupFAQInteractions() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                this.faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active', !isActive);
                
                // Smooth scroll to item if opening
                if (!isActive) {
                    setTimeout(() => {
                        item.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest'
                        });
                    }, 150);
                }
            });
        });
    }
    
    setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        // Observe elements for scroll animations
        document.querySelectorAll('.contact-method, .faq-item, .contact-stat-icon').forEach(el => {
            el.classList.add('scroll-reveal');
            observer.observe(el);
        });
    }
    
    setupContactMethodInteractions() {
        this.contactMethods.forEach(method => {
            method.addEventListener('click', () => {
                const icon = method.querySelector('.contact-icon');
                icon.style.animation = 'bounce 0.6s ease';
                
                setTimeout(() => {
                    icon.style.animation = '';
                }, 600);
            });
        });
    }
    
    setupFormAnimations() {
        // Staggered animation for form fields
        this.formInputs.forEach((input, index) => {
            input.closest('.form-group').style.animation = `slideUp 0.6s ease-out ${index * 0.1}s both`;
        });
        
        // Submit button animation
        setTimeout(() => {
            this.submitBtn.style.animation = 'slideUp 0.6s ease-out both';
        }, this.formInputs.length * 100);
    }
    
    setupAutoResize() {
        // Auto-resize textarea
        const textarea = document.querySelector('textarea');
        if (textarea) {
            textarea.addEventListener('input', () => {
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
            });
        }
    }
}

// ═══════════════════════════════════════════════════════════════
// ENHANCED UI INTERACTIONS
// ═══════════════════════════════════════════════════════════════

class ContactUIEnhancements {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupFloatingLabels();
        this.setupInputMask();
        this.setupCopyToClipboard();
        this.setupKeyboardShortcuts();
        this.setupTooltips();
    }
    
    setupFloatingLabels() {
        const inputs = document.querySelectorAll('.form-input');
        
        inputs.forEach(input => {
            const updateLabel = () => {
                const formGroup = input.closest('.form-group');
                const label = formGroup.querySelector('.form-label');
                
                if (input.value || input === document.activeElement) {
                    label.style.transform = 'translateY(-20px) scale(0.85)';
                    label.style.color = '#ef4444';
                } else {
                    label.style.transform = '';
                    label.style.color = '';
                }
            };
            
            input.addEventListener('focus', updateLabel);
            input.addEventListener('blur', updateLabel);
            input.addEventListener('input', updateLabel);
            
            // Initial check
            updateLabel();
        });
    }
    
    setupInputMask() {
        // Simple phone number formatting
        const phoneInput = document.querySelector('input[type="tel"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 6) {
                    value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
                }
                e.target.value = value;
            });
        }
    }
    
    setupCopyToClipboard() {
        // Add copy functionality to contact info
        const emailElements = document.querySelectorAll('p:has-text("@")');
        
        emailElements.forEach(element => {
            element.style.cursor = 'pointer';
            element.title = 'Click to copy';
            
            element.addEventListener('click', () => {
                navigator.clipboard.writeText(element.textContent.trim());
                this.showCopySuccess(element);
            });
        });
    }
    
    showCopySuccess(element) {
        const originalText = element.textContent;
        element.textContent = 'Copied!';
        element.style.color = '#10b981';
        
        setTimeout(() => {
            element.textContent = originalText;
            element.style.color = '';
        }, 2000);
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + Enter to submit form
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                const form = document.getElementById('contactForm');
                if (form && document.activeElement.tagName !== 'TEXTAREA') {
                    form.dispatchEvent(new Event('submit'));
                }
            }
            
            // Escape to clear form
            if (e.key === 'Escape') {
                const activeElement = document.activeElement;
                if (activeElement.classList.contains('form-input')) {
                    activeElement.blur();
                }
            }
        });
    }
    
    setupTooltips() {
        // Add helpful tooltips
        const tooltips = [
            { selector: 'input[name="email"]', text: 'We\'ll never share your email' },
            { selector: 'select[name="subject"]', text: 'Choose the topic that best fits your inquiry' },
            { selector: 'textarea[name="message"]', text: 'The more details you provide, the better we can help' }
        ];
        
        tooltips.forEach(({ selector, text }) => {
            const element = document.querySelector(selector);
            if (element) {
                this.addTooltip(element, text);
            }
        });
    }
    
    addTooltip(element, text) {
        let tooltip;
        
        element.addEventListener('mouseenter', () => {
            tooltip = document.createElement('div');
            tooltip.textContent = text;
            tooltip.style.cssText = `
                position: absolute;
                background: #1f2937;
                color: white;
                padding: 8px 12px;
                border-radius: 8px;
                font-size: 12px;
                white-space: nowrap;
                z-index: 1000;
                opacity: 0;
                transform: translateY(10px);
                transition: all 0.3s ease;
                pointer-events: none;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = element.getBoundingClientRect();
            tooltip.style.top = rect.bottom + 8 + 'px';
            tooltip.style.left = rect.left + 'px';
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateY(0)';
            }, 10);
        });
        
        element.addEventListener('mouseleave', () => {
            if (tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    tooltip.remove();
                }, 300);
            }
        });
    }
}

// ═══════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize all components
        const contactController = new ContactPageController();
        const uiEnhancements = new ContactUIEnhancements();
        
        // Add custom animations
        if (!document.querySelector('#contact-animations')) {
            const style = document.createElement('style');
            style.id = 'contact-animations';
            style.textContent = `
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                
                @keyframes bounce {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                
                @keyframes confettiFall {
                    to {
                        transform: translateY(100vh) rotate(720deg);
                        opacity: 0;
                    }
                }
                
                .form-input.error {
                    border-bottom-color: #ef4444 !important;
                    animation: shake 0.3s ease-in-out;
                }
                
                .submit-btn.ready {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                }
                
                .has-error .form-label {
                    color: #ef4444 !important;
                }
            `;
            document.head.appendChild(style);
        }
        
        // Page entrance animation
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
        
        console.log('📞 Contact page loaded successfully!');
        console.log('📱 Form validation active');
        console.log('🎭 Animations initialized');
        console.log('⚡ Enhanced UX features ready');
        
    } catch (error) {
        console.error('❌ Error initializing contact page:', error);
    }
});

// ═══════════════════════════════════════════════════════════════
// ERROR HANDLING
// ═══════════════════════════════════════════════════════════════

window.addEventListener('error', (e) => {
    console.error('🚨 Contact page error:', e.error);
    
    // Graceful degradation
    document.body.classList.add('fallback-mode');
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ContactPageController, ContactUIEnhancements };
}