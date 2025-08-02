// Enhanced Animation System for Dynamic User Experience

// Device detection and adaptive rendering
function detectDevice() {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Android/i.test(userAgent) && window.innerWidth >= 768;
    const isDesktop = !isMobile && !isTablet;
    
    return {
        isMobile: isMobile && !isTablet,
        isTablet: isTablet,
        isDesktop: isDesktop,
        isTouchDevice: 'ontouchstart' in window,
        isIOS: /iPad|iPhone|iPod/.test(userAgent),
        isAndroid: /Android/i.test(userAgent),
        isSafari: /Safari/i.test(userAgent) && !/Chrome/i.test(userAgent),
        isChrome: /Chrome/i.test(userAgent)
    };
}

// Adaptive layout controller
function initAdaptiveLayout() {
    const device = detectDevice();
    const body = document.body;
    
    // Add device-specific classes to body
    if (device.isMobile) {
        body.classList.add('mobile-device');
        initMobileLayout();
    } else if (device.isTablet) {
        body.classList.add('tablet-device'); 
        initTabletLayout();
    } else {
        body.classList.add('desktop-device');
        initDesktopLayout();
    }
    
    // Add OS-specific classes
    if (device.isIOS) body.classList.add('ios-device');
    if (device.isAndroid) body.classList.add('android-device');
    if (device.isSafari) body.classList.add('safari-browser');
    if (device.isChrome) body.classList.add('chrome-browser');
    
    // Touch device handling
    if (device.isTouchDevice) {
        body.classList.add('touch-device');
    } else {
        body.classList.add('no-touch');
    }
    
    console.log('Device detected:', device);
}

// Mobile-optimized layout
function initMobileLayout() {
    console.log('Initializing mobile layout...');
    
    // Disable complex animations
    disableComplexAnimations();
    
    // Create mobile-optimized navigation
    createMobileNavigation();
    
    // Optimize sections for mobile
    optimizeSectionsForMobile();
    
    // Mobile-specific performance optimizations
    initMobilePerformanceOptimizations();
}

// Tablet layout
function initTabletLayout() {
    console.log('Initializing tablet layout...');
    
    // Reduce animation complexity but keep some effects
    reduceAnimationComplexity();
    
    // Tablet-optimized grids
    optimizeSectionsForTablet();
}

// Desktop layout - full experience
function initDesktopLayout() {
    console.log('Initializing desktop layout...');
    
    // Enable all animations and effects
    enableFullAnimations();
    
    // Initialize advanced interactions
    initAdvancedInteractions();
}

// Mobile navigation replacement
function createMobileNavigation() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    // Create simplified mobile nav
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav-overlay';
    mobileNav.innerHTML = `
        <div class="mobile-nav-header">
            <h3>Ironman Engineering</h3>
            <button class="mobile-nav-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="mobile-nav-links">
            <a href="#hero" class="mobile-nav-link">Home</a>
            <a href="#services" class="mobile-nav-link">Services</a>
            <a href="#industries" class="mobile-nav-link">Industries</a>
            <a href="#hybrid-model" class="mobile-nav-link">Process</a>
            <a href="#about" class="mobile-nav-link">About</a>
            <a href="#contact" class="mobile-nav-link">Contact</a>
        </div>
    `;
    
    document.body.appendChild(mobileNav);
    
    // Add mobile menu toggle to existing navbar
    const navContainer = navbar.querySelector('.nav-container');
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-menu-toggle';
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    navContainer.appendChild(mobileToggle);
    
    // Mobile nav event listeners
    mobileToggle.addEventListener('click', () => {
        mobileNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    mobileNav.querySelector('.mobile-nav-close').addEventListener('click', () => {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close on link click
    mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Mobile section optimization
function optimizeSectionsForMobile() {
    // Simplify hero section for mobile
    const hero = document.querySelector('.hero');
    if (hero) {
        // Remove particle effects
        const particles = hero.querySelector('.hero-particles');
        if (particles) particles.remove();
        
        // Simplify hero cards layout
        const heroCards = hero.querySelectorAll('.hero-feature-card');
        heroCards.forEach(card => {
            card.style.margin = '1rem 0';
            card.style.maxWidth = '100%';
        });
    }
    
    // Convert all grids to single column
    const gridSections = [
        '.services-grid',
        '.process-grid', 
        '.challenges-grid',
        '.industries-grid',
        '.specializations-grid',
        '.delivery-model-grid',
        '.process-steps'
    ];
    
    gridSections.forEach(selector => {
        const grid = document.querySelector(selector);
        if (grid) {
            grid.style.gridTemplateColumns = '1fr';
            grid.style.gap = '1rem';
            grid.style.padding = '0 10px';
        }
    });
    
    // Optimize card sizing
    const cards = document.querySelectorAll('.service-card, .process-card, .challenge, .industry-card, .delivery-card, .process-step');
    cards.forEach(card => {
        card.style.margin = '0';
        card.style.width = '100%';
        card.style.maxWidth = '100%';
        card.style.boxSizing = 'border-box';
    });
}

// Tablet optimization
function optimizeSectionsForTablet() {
    const gridSections = [
        '.services-grid',
        '.challenges-grid',
        '.industries-grid',
        '.delivery-model-grid'
    ];
    
    gridSections.forEach(selector => {
        const grid = document.querySelector(selector);
        if (grid) {
            grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            grid.style.gap = '1.5rem';
        }
    });
}

// Disable complex animations for mobile
function disableComplexAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        /* Critical hero text visibility fixes */
        .mobile-device .hero h1,
        .mobile-device .hero-content h1 {
            opacity: 1 !important;
            animation: none !important;
            transform: none !important;
            visibility: visible !important;
            color: #ffffff !important;
        }
        
        .mobile-device .hero-description,
        .mobile-device .hero-content p {
            opacity: 0.9 !important;
            animation: none !important;
            transform: none !important;
            visibility: visible !important;
            color: #ffffff !important;
        }
        
        .mobile-device .hero-cards-container,
        .mobile-device .hero-feature-card {
            opacity: 1 !important;
            animation: none !important;
            transform: none !important;
            visibility: visible !important;
        }
        
        /* Disable other complex animations */
        .mobile-device .hero::before,
        .mobile-device .hero::after,
        .mobile-device .particle {
            animation: none !important;
        }
        
        .mobile-device * {
            transition-duration: 0.2s !important;
            animation-duration: 0.2s !important;
        }
        
        .mobile-device .hero-feature-card:hover,
        .mobile-device .service-card:hover,
        .mobile-device .challenge:hover {
            transform: none !important;
        }
    `;
    document.head.appendChild(style);
    
    // Also force immediate visibility via DOM manipulation
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero h1, .hero-description, .hero-cards-container, .hero-feature-card');
        heroElements.forEach(el => {
            el.style.opacity = '1';
            el.style.visibility = 'visible';
            el.style.animation = 'none';
            el.style.transform = 'none';
        });
    }, 100);
}

// Reduce animation complexity for tablets
function reduceAnimationComplexity() {
    const style = document.createElement('style');
    style.textContent = `
        .tablet-device .hero::before,
        .tablet-device .hero::after {
            animation-duration: 8s !important;
        }
        
        .tablet-device .particle {
            display: none;
        }
        
        .tablet-device * {
            transition-duration: 0.3s !important;
        }
    `;
    document.head.appendChild(style);
}

// Enable full animations for desktop
function enableFullAnimations() {
    // All animations are already in CSS - just ensure they're not disabled
    console.log('Full animations enabled for desktop');
}

// Advanced interactions for desktop
function initAdvancedInteractions() {
    // Mouse following effects, parallax, etc.
    initMouseFollowEffect();
    initParallaxEffect();
}

// Mobile performance optimizations
function initMobilePerformanceOptimizations() {
    // Disable scroll effects that can cause performance issues
    window.removeEventListener('scroll', handleParallax);
    
    // Reduce repaints
    const cards = document.querySelectorAll('.hero-feature-card, .service-card, .challenge');
    cards.forEach(card => {
        card.style.willChange = 'auto';
        card.style.transform = 'translateZ(0)';
    });
    
    // Lazy load images if any
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Mobile viewport height fix for Safari and Chrome
function setMobileVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Mobile Safari and Chrome specific fixes
function initMobileFixes() {
    // Set initial viewport height
    setMobileVH();
    
    // Update on resize and orientation change
    window.addEventListener('resize', setMobileVH);
    window.addEventListener('orientationchange', () => {
        setTimeout(setMobileVH, 100); // Delay for orientation change
    });
    
    // Disable iOS Safari bounce effect
    document.addEventListener('touchmove', function(e) {
        if (e.target.closest('.navbar') || e.target.closest('.hero')) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Fix iOS Safari viewport unit issues
    if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.minHeight = '-webkit-fill-available';
        }
    }
    
    // Prevent zoom on input focus for iOS
    if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.style.fontSize = '16px';
        });
    }
}

// Scroll-based animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Staggered animation for card groups
                if (entry.target.classList.contains('service-card')) {
                    const cards = document.querySelectorAll('.service-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 200);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right, .scale-in, .service-card'
    );
    
    animatedElements.forEach(el => observer.observe(el));
}

// Dynamic navbar background on scroll
function initNavbarAnimation() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.backdropFilter = 'blur(25px)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
    });
}

// Parallax effect for hero section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// Enhanced typing effect for hero text
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero h1');
    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';
    
    let index = 0;
    const typeInterval = setInterval(() => {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typeInterval);
            // Trigger description animation after title completes
            const description = document.querySelector('.hero-description');
            if (description) {
                description.style.animation = 'slideInFromBottom 1s ease-out 0.2s forwards';
            }
        }
    }, 100);
}

// Mouse-following animation for cards
function initMouseFollowEffect() {
    const cards = document.querySelectorAll('.hero-feature-card, .service-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle Home navigation to scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Comprehensive Main Initialization - Adaptive Layout System
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Ironman Engineering Services website...');
    
    // Initialize adaptive layout first - this determines mobile vs desktop experience
    initAdaptiveLayout();
    
    // Initialize mobile fixes for all devices (viewport height, etc.)
    initMobileFixes();
    
    // Initialize core animations (device-appropriate)
    initScrollAnimations();
    initNavbarAnimation();
    
    // Get device info for conditional initialization
    const device = detectDevice();
    console.log('Device detected:', device);
    
    // Desktop-only features
    if (device.isDesktop && !device.isTouchDevice) {
        initParallaxEffect();
        initMouseFollowEffect();
        
        // Initialize typing effect with delay for desktop only
        setTimeout(() => {
            initTypingEffect();
        }, 1000);
    }
    
    // Initialize navigation handling
    initNavigationHandling();
    
    // Initialize scroll-to-top button
    initScrollToTopButton();
    
    // Initialize animation on scroll
    initAnimationOnScroll();
    
    // Initialize enhanced navbar
    initEnhancedNavbar();
    
    // Initialize other core functionality
    initializeContactForm();
    initializeScrollAnimations();
    initializeStatsAnimation();
    
    console.log('Website initialization complete');
});

// Navigation handling (works for both mobile and desktop)
function initNavigationHandling() {
    
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Handle navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // If it's the home link (#top), scroll to top
            if (href === '#top') {
                e.preventDefault();
                scrollToTop();
            }
            // For other internal links, use smooth scrolling
            else if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                scrollToSection(targetId);
            }
        });
    });
    
    if (navToggle && navMenu) {
        // Toggle mobile menu
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Change hamburger icon to X when active
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                // Reset hamburger icon
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                // Reset hamburger icon
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Handle touch events for mobile
        document.addEventListener('touchstart', function(event) {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                // Reset hamburger icon
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu on window resize if larger than mobile breakpoint
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                // Reset hamburger icon
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Initialize smooth scrolling for all navigation links
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll to Top Button functionality
function initScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        // Show/hide scroll to top button based on scroll position
        function toggleScrollButton() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }
        
        // Listen for scroll events
        window.addEventListener('scroll', throttle(toggleScrollButton, 100));
        
        // Scroll to top when button is clicked
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Animation on Scroll (AOS) functionality
function initAnimationOnScroll() {
    // Add animation classes to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate in
    const animateElements = document.querySelectorAll('.market-card, .process-card, .footer-section');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Enhanced navbar background on scroll
function initEnhancedNavbar() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        function updateNavbarBackground() {
            if (window.pageYOffset > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        window.addEventListener('scroll', throttle(updateNavbarBackground, 100));
    }
}

// Revenue chart initialization
function initializeRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Year 1', 'Year 2', 'Year 3'],
            datasets: [{
                label: 'Projected Revenue ($M)',
                data: [8, 18, 35],
                backgroundColor: [
                    'rgba(30, 58, 138, 0.8)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(14, 165, 233, 0.8)'
                ],
                borderColor: [
                    'rgba(30, 58, 138, 1)',
                    'rgba(59, 130, 246, 1)',
                    'rgba(14, 165, 233, 1)'
                ],
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Revenue: $${context.parsed.y}M`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value + 'M';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// Contact form handling
function initializeContactForm() {
    const form = document.getElementById('investorForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            interest: formData.get('interest'),
            message: formData.get('message')
        };
        
        // Simulate form submission
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = '#10b981';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                form.reset();
                
                // Show success message
                showNotification('Thank you for your interest! We will contact you within 24 hours.', 'success');
            }, 2000);
        }, 1500);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.market-card, .service-card, .leader-card, .challenge, .specialty, .stream, .stat-item, .standard-item, .industry-item, .case-study-card, .award-card, .testimonial-card'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Statistics animation
function initializeStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateNumber(entry.target, 0, target, 2000);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Download pitch deck function
function downloadPitchDeck() {
    // Simulate pitch deck download
    showNotification('Pitch deck download will be available soon. Please contact us directly for immediate access.', 'info');
    
    // In a real implementation, this would trigger an actual download
    // window.open('/assets/pitch-deck.pdf', '_blank');
}

// Utility function for number animations
function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    const range = end - start;
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = start + (range * easeOutQuart(progress));
        
        element.textContent = Math.round(current).toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        transition: background-color 0.2s;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(style);

// Smooth reveal for hero stats on load
window.addEventListener('load', function() {
    const heroStats = document.querySelectorAll('.stat h3');
    heroStats.forEach((stat, index) => {
        setTimeout(() => {
            const text = stat.textContent;
            if (text.includes('$')) {
                animateNumber(stat, 0, parseInt(text.replace(/\D/g, '')), 2000);
                stat.textContent = '$' + stat.textContent;
            } else if (text.includes('%')) {
                animateNumber(stat, 0, parseInt(text.replace(/\D/g, '')), 2000);
                stat.textContent = stat.textContent + '%';
            }
        }, index * 200);
    });
});

// Add smooth scrolling for all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Throttle function for performance
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS for scrolled navbar state and animations
const style = document.createElement('style');
style.textContent = `
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98) !important;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1) !important;
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards !important;
    }
`;
document.head.appendChild(style);
