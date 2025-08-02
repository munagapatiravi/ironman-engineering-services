// Enhanced Hero Animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero animations
    initHeroAnimations();
    
    // Initialize other animations
    initScrollAnimations();
    initHoverAnimations();
    initParallaxEffect();
});

function initHeroAnimations() {
    const hero = document.querySelector('#hero');
    const heroContent = document.querySelector('.hero-content');
    const title = heroContent.querySelector('h1');
    const leadText = heroContent.querySelector('.hero-lead');
    const subText = heroContent.querySelector('.hero-sub');
    const featureCards = heroContent.querySelectorAll('.hero-feature-card');
    
    // Ensure cards are always visible (no initial hiding)
    featureCards.forEach((card, index) => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.display = 'flex';
        card.style.transform = 'translateY(0)';
    });
    
    // Set initial states for other elements (but not cards)
    hero.style.opacity = '0';
    title.style.opacity = '0';
    title.style.transform = 'translateY(50px)';
    leadText.style.opacity = '0';
    leadText.style.transform = 'translateY(30px)';
    subText.style.opacity = '0';
    subText.style.transform = 'translateY(30px)';
    
    // Create animated background elements
    createAnimatedBackground();
    
    // Start hero entrance sequence
    setTimeout(() => {
        hero.style.transition = 'opacity 0.8s ease-out';
        hero.style.opacity = '1';
        
        // Animate title
        setTimeout(() => {
            title.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 200);
        
        // Animate lead text
        setTimeout(() => {
            leadText.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            leadText.style.opacity = '1';
            leadText.style.transform = 'translateY(0)';
        }, 500);
        
        // Animate sub text
        setTimeout(() => {
            subText.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            subText.style.opacity = '1';
            subText.style.transform = 'translateY(0)';
        }, 800);
        
        // Animate feature cards with engineering-style entrance
        featureCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
                
                // Add engineering-style building effect
                setTimeout(() => {
                    card.style.animation = `engineering-card-entrance 0.6s ease-out`;
                    
                    // Add subtle blueprint scan effect
                    const scanLine = document.createElement('div');
                    scanLine.style.cssText = `
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent);
                        animation: scan-line 1s ease-out;
                        z-index: 10;
                    `;
                    card.appendChild(scanLine);
                    
                    setTimeout(() => {
                        scanLine.remove();
                    }, 1000);
                }, 100);
            }, 1200 + (index * 150));
        });
    }, 100);
    
    // Add continuous floating animation to cards
    setTimeout(() => {
        featureCards.forEach((card, index) => {
            addFloatingAnimation(card, index);
        });
    }, 3000);
}

function createAnimatedBackground() {
    const hero = document.querySelector('#hero');
    const heroBg = hero.querySelector('.hero-bg');
    
    // Create technical blueprint lines that draw themselves
    createBlueprintLines(heroBg);
    
    // Create floating technical icons
    createTechnicalParticles(heroBg);
    
    // Create animated grid with construction feel
    createConstructionGrid(heroBg);
    
    // Add subtle beam/structural elements
    createStructuralElements(heroBg);
}

function createBlueprintLines(container) {
    // Create animated blueprint-style drawing lines
    for (let i = 0; i < 8; i++) {
        const line = document.createElement('div');
        line.className = 'blueprint-line';
        const isHorizontal = i % 2 === 0;
        
        line.style.cssText = `
            position: absolute;
            background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent);
            z-index: 1;
            ${isHorizontal ? 
                `width: 0%; height: 2px; top: ${20 + i * 15}%; left: ${10 + (i * 5)}%;` :
                `height: 0%; width: 2px; left: ${15 + i * 12}%; top: ${10 + (i * 8)}%;`
            }
            animation: draw-line-${isHorizontal ? 'horizontal' : 'vertical'} ${3 + Math.random() * 2}s ease-out ${i * 0.3}s forwards;
        `;
        container.appendChild(line);
    }
}

function createTechnicalParticles(container) {
    // Engineering symbols and icons that float
    const engineeringSymbols = ['⚙️', '🔧', '📐', '📏', '⚡', '🏗️'];
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'tech-particle';
        const symbol = engineeringSymbols[Math.floor(Math.random() * engineeringSymbols.length)];
        
        particle.innerHTML = symbol;
        particle.style.cssText = `
            position: absolute;
            font-size: ${12 + Math.random() * 8}px;
            opacity: ${0.3 + Math.random() * 0.3};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: tech-float ${15 + Math.random() * 10}s infinite linear;
            z-index: 1;
            filter: blur(0.5px);
        `;
        container.appendChild(particle);
    }
}

function createConstructionGrid(container) {
    // Animated CAD-style grid that pulses
    const gridOverlay = document.createElement('div');
    gridOverlay.className = 'cad-grid';
    gridOverlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: 
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px);
        background-size: 60px 60px, 60px 60px, 20px 20px, 20px 20px;
        opacity: 0.6;
        animation: cad-grid-pulse 6s ease-in-out infinite;
        z-index: 1;
    `;
    container.appendChild(gridOverlay);
}

function createStructuralElements(container) {
    // Create animated structural beam elements
    for (let i = 0; i < 4; i++) {
        const beam = document.createElement('div');
        beam.className = 'structural-beam';
        
        beam.style.cssText = `
            position: absolute;
            width: ${100 + Math.random() * 150}px;
            height: 3px;
            background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), rgba(147, 197, 253, 0.4), transparent);
            transform: rotate(${-30 + Math.random() * 60}deg);
            left: ${Math.random() * 80}%;
            top: ${Math.random() * 80}%;
            animation: structural-glow ${4 + Math.random() * 3}s ease-in-out infinite;
            z-index: 1;
        `;
        
        // Add connection points (bolts/joints)
        const connection1 = document.createElement('div');
        const connection2 = document.createElement('div');
        
        [connection1, connection2].forEach((conn, index) => {
            conn.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                background: rgba(59, 130, 246, 0.8);
                border-radius: 50%;
                top: -1.5px;
                ${index === 0 ? 'left: 10px;' : 'right: 10px;'}
                animation: connection-pulse ${2 + Math.random()}s ease-in-out infinite;
            `;
            beam.appendChild(conn);
        });
        
        container.appendChild(beam);
    }
}

function addFloatingAnimation(card, index) {
    const delay = index * 0.5;
    const duration = 3 + Math.random() * 2;
    
    card.style.animation = `gentle-float ${duration}s ease-in-out ${delay}s infinite`;
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections except hero
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });
}

function initHoverAnimations() {
    // Enhanced card hover effects
    const cards = document.querySelectorAll('.hero-feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.2)';
            this.style.borderColor = 'rgba(59, 130, 246, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
            this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        });
    });
}

function initParallaxEffect() {
    const hero = document.querySelector('#hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        
        if (scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${parallax}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    });
}

// Add custom CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes draw-line-horizontal {
        0% { width: 0%; opacity: 0; }
        10% { opacity: 1; }
        100% { width: 60%; opacity: 0.6; }
    }
    
    @keyframes draw-line-vertical {
        0% { height: 0%; opacity: 0; }
        10% { opacity: 1; }
        100% { height: 40%; opacity: 0.6; }
    }
    
    @keyframes tech-float {
        0% {
            transform: translateY(100vh) rotate(0deg) scale(0.8);
            opacity: 0;
        }
        5% {
            opacity: 0.7;
        }
        95% {
            opacity: 0.7;
        }
        100% {
            transform: translateY(-100px) rotate(180deg) scale(1.2);
            opacity: 0;
        }
    }
    
    @keyframes cad-grid-pulse {
        0%, 100% {
            opacity: 0.4;
            transform: scale(1);
        }
        25% {
            opacity: 0.7;
            transform: scale(1.002);
        }
        50% {
            opacity: 0.5;
            transform: scale(1);
        }
        75% {
            opacity: 0.8;
            transform: scale(0.998);
        }
    }
    
    @keyframes structural-glow {
        0%, 100% {
            opacity: 0.4;
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
        }
        50% {
            opacity: 0.8;
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(147, 197, 253, 0.3);
        }
    }
    
    @keyframes connection-pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 0.6;
        }
        50% {
            transform: scale(1.5);
            opacity: 1;
            box-shadow: 0 0 8px rgba(59, 130, 246, 0.8);
        }
    }
    
    @keyframes float-particle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes grid-pulse {
        0%, 100% {
            opacity: 0.3;
        }
        50% {
            opacity: 0.6;
        }
    }
    
    @keyframes gentle-float {
        0%, 100% {
            transform: translateY(0) rotate(0deg);
        }
        25% {
            transform: translateY(-10px) rotate(1deg);
        }
        50% {
            transform: translateY(-5px) rotate(0deg);
        }
        75% {
            transform: translateY(-15px) rotate(-1deg);
        }
    }
    
    @keyframes engineering-card-entrance {
        0% {
            opacity: 0;
            transform: translateY(50px) rotateX(20deg) scale(0.9);
        }
        60% {
            opacity: 0.8;
            transform: translateY(-5px) rotateX(-5deg) scale(1.02);
        }
        100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
        }
    }
    
    @keyframes scan-line {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero-feature-card {
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    
    .hero-feature-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
        transition: left 0.5s ease;
    }
    
    .hero-feature-card:hover::before {
        left: 100%;
    }
    
    .hero-feature-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.1);
        border-color: rgba(59, 130, 246, 0.4);
    }
    
    .hero-feature-card:hover .feature-icon {
        transform: scale(1.1) rotate(5deg);
        transition: transform 0.3s ease;
        color: rgba(59, 130, 246, 0.9);
    }
    
    .hero-feature-card .feature-icon {
        transition: all 0.3s ease;
        position: relative;
        z-index: 2;
    }
    
    .blueprint-line {
        box-shadow: 0 0 4px rgba(59, 130, 246, 0.3);
    }
    
    .tech-particle {
        text-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
    }
`;
document.head.appendChild(style);
