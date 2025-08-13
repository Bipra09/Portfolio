// ===== CUSTOM CURSOR ===== 
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor animation
    function animateCursor() {
        // Main cursor - follows mouse directly
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        // Follower cursor - follows with delay
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });
});

// ===== NAVIGATION ===== 
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;
    
    navLinks.forEach(link => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const sectionTop = targetSection.offsetTop;
                const sectionHeight = targetSection.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        }
    });
});

// ===== SMOOTH SCROLLING ===== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS ===== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .about-card, .stat');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===== GITHUB REPOSITORIES DATA ===== 
const githubUsername = 'Bipra09';
const repositories = [
    { 
        name: 'Gen-er-ater', 
        description: 'AI-powered content generator tool with modern UI and multiple generation modes', 
        language: 'HTML', 
        isWebsite: true, 
        demo: 'https://bipra09.github.io/Gen-er-ater/',
        categories: ['fullstack', 'ai']
    },
    { 
        name: 'Text-er', 
        description: 'Advanced text processing and manipulation tool with real-time editing features', 
        language: 'HTML', 
        isWebsite: true, 
        demo: 'https://bipra09.github.io/Text-er/',
        categories: ['fullstack']
    },
    { 
        name: 'MindMesh', 
        description: 'AI-powered mind mapping and knowledge organization tool for enhanced productivity', 
        language: 'JavaScript', 
        isWebsite: true, 
        demo: 'https://bipra09.github.io/MindMesh/',
        categories: ['fullstack', 'ai']
    },
    { 
        name: 'Covid19-Vaccination', 
        description: 'COVID-19 vaccination tracking and analytics system with data visualization', 
        language: 'Python', 
        isWebsite: true, 
        demo: 'https://bipra09.github.io/Covid19-Vaccination/',
        categories: ['fullstack', 'ai']
    },
    { 
        name: 'StockG', 
        description: 'Stock market analysis and prediction tool with real-time data and ML algorithms', 
        language: 'Python', 
        isWebsite: true, 
        demo: 'https://bipra09.github.io/StockG/',
        categories: ['fullstack', 'ai']
    },
    { 
        name: 'meat-a-dora', 
        description: 'Innovative food discovery and recommendation platform with smart filtering', 
        language: 'HTML', 
        isWebsite: true, 
        demo: 'https://bipra09.github.io/meat-a-dora/',
        categories: ['fullstack']
    },
    { 
        name: 'digital_moonshine', 
        description: 'Creative digital art and visualization project with interactive elements', 
        language: 'HTML', 
        isWebsite: true, 
        demo: 'https://bipra09.github.io/digital_moonshine/',
        categories: ['fullstack']
    },
    { 
        name: 'Anomaly-Detection-in-smart-cities', 
        description: 'Advanced anomaly detection system for smart city surveillance and monitoring', 
        language: 'Python', 
        isWebsite: false,
        categories: ['ai']
    },
    { 
        name: 'Attendance-Management-System', 
        description: 'Automated attendance tracking system with facial recognition and ML algorithms', 
        language: 'Python', 
        isWebsite: false,
        categories: ['ai', 'fullstack']
    },
    { 
        name: 'Crop-Health-Management', 
        description: 'ML-based crop health monitoring and disease detection system for agriculture', 
        language: 'Jupyter Notebook', 
        isWebsite: false,
        categories: ['ai']
    },
    { 
        name: 'RealTime-Virtual-Whiteboard', 
        description: 'Collaborative virtual whiteboard with real-time synchronization and ML features', 
        language: 'Python', 
        isWebsite: false,
        categories: ['fullstack', 'ai']
    },
    { 
        name: 'facial-recognition', 
        description: 'Advanced facial recognition system with emotion detection and real-time processing', 
        language: 'Python', 
        isWebsite: false,
        categories: ['ai']
    }
];

// ===== PROJECT FILTERING WITH GITHUB INTEGRATION ===== 
let githubProjectsLoaded = false;

function createGitHubProjectCard(repo) {
    const techColors = {
        'HTML': '#e34c26',
        'JavaScript': '#f1e05a',
        'Python': '#3572a5',
        'Jupyter Notebook': '#da5b0b',
        'CSS': '#1572b6'
    };

    const categoryString = repo.categories.join(' ');

    return `
        <div class="project-card github-project" data-category="${categoryString}">
            <div class="project-image">
                <div class="project-overlay">
                    <div class="project-links">
                        ${repo.isWebsite ? `
                            <a href="${repo.demo}" target="_blank" class="project-link" title="Live Demo">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        ` : ''}
                        <a href="https://github.com/${githubUsername}/${repo.name}" target="_blank" class="project-link" title="View Code">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div class="github-placeholder">
                    <i class="fab fa-github"></i>
                    <span>${repo.language}</span>
                </div>
            </div>
            <div class="project-content">
                <div class="project-category">GitHub ${repo.isWebsite ? '• Live Project' : '• Repository'}</div>
                <h3 class="project-title">${repo.name.replace(/-/g, ' ')}</h3>
                <p class="project-description">${repo.description}</p>
                <div class="project-tech">
                    <span class="tech-tag" style="background-color: ${techColors[repo.language] || '#666'}; color: #fff;">
                        ${repo.language}
                    </span>
                    ${repo.isWebsite ? '<span class="tech-tag live-tag">🌐 Live Demo</span>' : '<span class="tech-tag">📂 Repository</span>'}
                    ${repo.categories.map(cat => `<span class="tech-tag tech-category">${cat.toUpperCase()}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function loadGitHubProjects() {
    if (githubProjectsLoaded) return;
    
    const projectsGrid = document.querySelector('.projects-grid');
    
    repositories.forEach((repo, index) => {
        const projectCard = createGitHubProjectCard(repo);
        projectsGrid.insertAdjacentHTML('beforeend', projectCard);
        
        // Animate in the new cards
        setTimeout(() => {
            const newCard = projectsGrid.lastElementChild;
            newCard.style.opacity = '0';
            newCard.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                newCard.style.opacity = '1';
                newCard.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
    
    githubProjectsLoaded = true;
    
    // Re-apply effects to new cards
    setTimeout(() => {
        addTiltEffect();
        addMagneticEffect();
        updateCursorEffects();
    }, 500);
}

function updateCursorEffects() {
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            document.querySelector('.cursor').classList.add('hover');
            document.querySelector('.cursor-follower').classList.add('hover');
        });
        element.addEventListener('mouseleave', () => {
            document.querySelector('.cursor').classList.remove('hover');
            document.querySelector('.cursor-follower').classList.remove('hover');
        });
    });
}

// Enhanced Project Filtering
function initializeProjectFiltering() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Load GitHub projects if not already loaded
            if (!githubProjectsLoaded) {
                loadGitHubProjects();
            }
            
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-category');
            const allProjectCards = document.querySelectorAll('.project-card');
            
            allProjectCards.forEach((card, index) => {
                const cardCategories = card.getAttribute('data-category');
                const shouldShow = filterValue === 'all' || cardCategories.includes(filterValue);
                
                if (shouldShow) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===== TYPING ANIMATION ===== 
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// ===== SKILL BARS ANIMATION ===== 
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ===== PARALLAX EFFECTS ===== 
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero, .about, .projects');
    
    parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// ===== CONTACT FORM ===== 
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Message sent successfully!', 'success');
    this.reset();
});

// ===== NOTIFICATION SYSTEM ===== 
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00ff88' : '#ff6b6b'};
        color: #000;
        padding: 1rem 2rem;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(notificationStyles);

// ===== SCROLL PROGRESS INDICATOR ===== 
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(135deg, #00ff88, #00d4ff);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});

// ===== TEXT REVEAL ANIMATION ===== 
function revealText() {
    const textElements = document.querySelectorAll('.hero-title, .section-title');

    textElements.forEach(element => {
        const nodes = Array.from(element.childNodes);
        element.innerHTML = '';

        nodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.textContent.split('').forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.cssText = `
                        opacity: 0;
                        transform: translateY(20px);
                        display: inline-block;
                        animation: revealChar 0.5s ease forwards;
                        animation-delay: ${index * 0.05}s;
                    `;
                    element.appendChild(span);
                });
            } else {
                element.appendChild(node); // keep emoji and other HTML intact
            }
        });
    });
}


// Add text reveal styles
const textRevealStyles = document.createElement('style');
textRevealStyles.textContent = `
    @keyframes revealChar {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(textRevealStyles);

// ===== MAGNETIC EFFECT FOR BUTTONS ===== 
function addMagneticEffect() {
    const magneticElements = document.querySelectorAll('.btn, .project-link, .contact-social a, .category-btn');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });
}

// ===== TILT EFFECT FOR CARDS ===== 
function addTiltEffect() {
    const tiltElements = document.querySelectorAll('.project-card, .about-card');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// ===== LOADING ANIMATION ===== 
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">Bipra<span>.dev</span></div>
            <div class="loader-bar">
                <div class="loader-progress"></div>
            </div>
        </div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        opacity: 1;
        transition: opacity 0.5s ease;
    `;
    
    const loaderStyles = document.createElement('style');
    loaderStyles.textContent = `
        .loader-content {
            text-align: center;
        }
        
        .loader-logo {
            font-size: 2rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 2rem;
        }
        
        .loader-logo span {
            color: #00ff88;
        }
        
        .loader-bar {
            width: 200px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            margin: 0 auto;
        }
        
        .loader-progress {
            height: 100%;
            background: linear-gradient(135deg, #00ff88, #00d4ff);
            width: 0%;
            animation: loadProgress 2s ease-in-out forwards;
        }
        
        @keyframes loadProgress {
            to { width: 100%; }
        }
    `;
    
    document.head.appendChild(loaderStyles);
    document.body.appendChild(loader);
    
    // Remove loader after animation
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
                loaderStyles.parentNode.removeChild(loaderStyles);
            }
        }, 500);
    }, 2500);
}

// ===== EASTER EGG - KONAMI CODE ===== 
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode = konamiCode.slice(-konamiSequence.length);
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    // Add rainbow effect to the entire page
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        * {
            animation: rainbow 2s linear infinite !important;
        }
        
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    
    document.head.appendChild(rainbowStyle);
    showNotification('🎉 Konami Code Activated! Rainbow Mode ON!', 'success');
    
    // Remove effect after 10 seconds
    setTimeout(() => {
        if (rainbowStyle.parentNode) {
            rainbowStyle.parentNode.removeChild(rainbowStyle);
        }
        showNotification('Rainbow Mode OFF!', 'success');
    }, 10000);
}

// ===== PERFORMANCE OPTIMIZATION ===== 
// Debounce scroll events
function debounce(func, wait) {
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-dependent functions here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Lazy loading for images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ===== MOUSE TRAIL EFFECT ===== 
class MouseTrail {
    constructor() {
        this.dots = [];
        this.mouse = { x: 0, y: 0 };
        this.init();
    }
    
    init() {
        // Create trail dots
        for (let i = 0; i < 12; i++) {
            const dot = document.createElement('div');
            dot.className = 'trail-dot';
            dot.style.cssText = `
                position: fixed;
                width: ${6 - i * 0.3}px;
                height: ${6 - i * 0.3}px;
                background: #00ff88;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                opacity: ${1 - i * 0.08};
                transition: all 0.1s ease;
                mix-blend-mode: screen;
            `;
            document.body.appendChild(dot);
            this.dots.push({ element: dot, x: 0, y: 0 });
        }
        
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        this.animate();
    }
    
    animate() {
        let x = this.mouse.x;
        let y = this.mouse.y;
        
        this.dots.forEach((dot, index) => {
            dot.x += (x - dot.x) * (0.3 - index * 0.02);
            dot.y += (y - dot.y) * (0.3 - index * 0.02);
            dot.element.style.left = dot.x + 'px';
            dot.element.style.top = dot.y + 'px';
            
            x = dot.x;
            y = dot.y;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ===== INITIALIZE ALL EFFECTS ===== 
document.addEventListener('DOMContentLoaded', function() {
    // Show loading animation
    showLoadingAnimation();
    
    // Initialize effects after loading
    setTimeout(() => {
        revealText();
        addMagneticEffect();
        addTiltEffect();
        initializeProjectFiltering();
        
        // Load GitHub projects automatically when page loads
        setTimeout(() => {
            loadGitHubProjects();
        }, 1000);
    }, 1000);
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, (index + 1) * 200);
    });
});

// ===== AUTO-LOAD GITHUB PROJECTS ON SCROLL ===== 
const projectsSection = document.querySelector('#projects');
const projectsSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !githubProjectsLoaded) {
            setTimeout(() => {
                loadGitHubProjects();
            }, 500);
        }
    });
}, { threshold: 0.3 });

if (projectsSection) {
    projectsSectionObserver.observe(projectsSection);
}

// ===== CONSOLE EASTER EGG ===== 
console.log(`
%c
╔══════════════════════════════════════╗
║                                      ║
║         Welcome to Bipra's           ║
║        Portfolio Website!            ║
║                                      ║
║    🚀 Built with passion & code      ║
║    💡 Powered by creativity          ║
║    🎯 Designed for impact            ║
║                                      ║
║    Try the Konami Code! ↑↑↓↓←→←→BA   ║
║                                      ║
╚══════════════════════════════════════╝
`, 
'color: #00ff88; font-family: monospace; font-size: 12px; background: #0a0a0a; padding: 10px;'
);

console.log('%cLooking for a fullstack developer? Let\'s connect! 💬', 'color: #00d4ff; font-size: 16px; font-weight: bold;');

// Initialize mouse trail (optional - can be disabled for performance)
// new MouseTrail();

console.log('%c✨ Portfolio loaded successfully!', 'color: #00ff88; font-weight: bold;');