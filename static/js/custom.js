// Custom JavaScript for contact page
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        showToaster('✨ Discord username copied to clipboard!');
    }, function(err) {
        showToaster('❌ Failed to copy username.');
        console.error('Could not copy text: ', err);
    });
}

function showToaster(message) {
    // Remove existing toaster if any
    const existingToaster = document.querySelector('.custom-toaster');
    if (existingToaster) {
        existingToaster.remove();
    }
    
    // Create toaster
    const toaster = document.createElement('div');
    toaster.className = 'custom-toaster';
    toaster.textContent = message;
    document.body.appendChild(toaster);
    
    // Show with animation
    setTimeout(() => {
        toaster.classList.add('show');
    }, 10);
    
    // Hide and remove
    setTimeout(() => {
        toaster.classList.remove('show');
        setTimeout(() => {
            if (toaster.parentNode) {
                toaster.remove();
            }
        }, 300);
    }, 2500);
}

// Add toaster styles dynamically
const style = document.createElement('style');
style.textContent = `
.custom-toaster {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background-color: #333;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    z-index: 9999;
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
    font-weight: 500;
    pointer-events: none;
}
html.dark .custom-toaster {
    background-color: #e5e7eb;
    color: #1f2937;
}
.custom-toaster.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}
`;
document.head.appendChild(style);

// ===== PROFESSIONAL FUN COMBINATION =====

// 1. SHOOTING STARS
function createShootingStars() {
    const container = document.createElement('div');
    container.className = 'stars-container';
    document.body.appendChild(container);
    
    function createStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 2 + 2) + 's');
        star.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(star);
        
        // Remove after animation
        setTimeout(() => {
            star.remove();
        }, 8000);
    }
    
    // Create stars periodically
    setInterval(createStar, 3000);
    
    // Initial stars
    for (let i = 0; i < 5; i++) {
        setTimeout(createStar, i * 500);
    }
}

// 2. SCROLL PROGRESS BAR
function createProgressBar() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        bar.style.width = scrolled + '%';
    });
}

// 3. MAGNETIC BUTTONS
function initMagneticButtons() {
    const buttons = document.querySelectorAll('button, .btn, a:not(.no-magnet)');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// 4. EASTER EGG - Konami Code
function initEasterEgg() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // Secret code '1337' for Matrix
    let matrixCode = '';
    document.addEventListener('keydown', (e) => {
        matrixCode += e.key;
        if (matrixCode.includes('1337')) {
            activateMatrixMode();
            matrixCode = '';
        }
    });
}

function activateEasterEgg() {
    // Rainbow mode
    document.body.classList.add('easter-egg-active');
    
    // Unicorn parade!
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const unicorn = document.createElement('div');
            unicorn.className = 'unicorn';
            unicorn.textContent = '🦄';
            unicorn.style.left = Math.random() * 100 + '%';
            document.body.appendChild(unicorn);
            
            setTimeout(() => unicorn.remove(), 3000);
        }, i * 200);
    }
    
    // Disable after 10 seconds
    setTimeout(() => {
        document.body.classList.remove('easter-egg-active');
    }, 10000);
}

function activateMatrixMode() {
    // Create matrix rain effect
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9998; pointer-events: none;';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const drops = [];
    
    for (let i = 0; i < canvas.width / 20; i++) {
        drops[i] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = '15px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(text, i * 20, drops[i] * 20);
            
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    const interval = setInterval(drawMatrix, 35);
    
    // Stop after 5 seconds
    setTimeout(() => {
        clearInterval(interval);
        canvas.remove();
    }, 5000);
}

// 5. ADD INDEX TO TECH ITEMS FOR STAGGERED ANIMATION
function addTechIndexes() {
    document.querySelectorAll('.tech-item').forEach((item, index) => {
        item.style.setProperty('--index', index);
    });
}

// 6. FUN TOOLTIPS
function initFunTooltips() {
    const tooltips = [
        "👋 Thanks for hovering!",
        "🔍 Exploring?",
        "✨ You found me!",
        "🚀 Click me!",
        "💻 Student developer",
        "🔒 Security enthusiast",
        "🌟 Star on GitHub?",
        "☕ Built with coffee"
    ];
    
    document.querySelectorAll('a, button').forEach((el, i) => {
        el.setAttribute('data-tip', tooltips[i % tooltips.length]);
        
        el.addEventListener('mouseenter', function(e) {
            const tip = document.createElement('div');
            tip.className = 'fun-tip';
            tip.textContent = this.getAttribute('data-tip');
            tip.style.cssText = `
                position: absolute;
                background: #0284c7;
                color: white;
                padding: 5px 10px;
                border-radius: 20px;
                font-size: 12px;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                white-space: nowrap;
                animation: popIn 0.3s;
                z-index: 100;
            `;
            this.style.position = 'relative';
            this.appendChild(tip);
        });
        
        el.addEventListener('mouseleave', function() {
            const tip = this.querySelector('.fun-tip');
            if (tip) tip.remove();
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createShootingStars();
    createProgressBar();
    initMagneticButtons();
    initEasterEgg();
    addTechIndexes();
    initFunTooltips();
});

// Add pop animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes popIn {
        0% { transform: translateX(-50%) scale(0); }
        80% { transform: translateX(-50%) scale(1.1); }
        100% { transform: translateX(-50%) scale(1); }
    }
`;
document.head.appendChild(style);