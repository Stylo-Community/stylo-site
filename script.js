class ParticleSystem {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 20;
        this.setupCanvas();
        this.createParticles();
        this.animate();
        window.addEventListener('resize', () => this.handleResize());
    }
    setupCanvas() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '-1';
        document.querySelector('.particles').appendChild(this.canvas);
        this.handleResize();
    }
    handleResize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.2,
                color: Math.random() > 0.5 ? '#FFD700' : '#60A5FA'
            });
        }
    }
    updateParticles() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            particle.opacity += (Math.random() - 0.5) * 0.01;
            particle.opacity = Math.max(0.1, Math.min(0.7, particle.opacity));
        });
    }
    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fill();
        });
        this.ctx.globalAlpha = 1;
    }
    animate() {
        this.updateParticles();
        this.drawParticles();
        requestAnimationFrame(() => this.animate());
    }
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function setupSocialButtons() {
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const platform = button.dataset.platform;
            createRipple(button, platform);
        });
        button.addEventListener('click', (e) => {
        });
    });
}

function createRipple(button, platform) {
    const ripple = document.createElement('div');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        left: 50%;
        top: 50%;
        width: ${size}px;
        height: ${size}px;
        margin-left: ${-size/2}px;
        margin-top: ${-size/2}px;
    `;
    button.appendChild(ripple);
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 768) {
        new ParticleSystem();
    }
    setupSocialButtons();
    const animatedElements = document.querySelectorAll('.content-card, .feature-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const header = document.querySelector('.header');
                if (scrolled > 100) {
                    header.style.transform = 'scale(0.9)';
                    header.style.opacity = '0.9';
                } else {
                    header.style.transform = 'scale(1)';
                    header.style.opacity = '1';
                }
                ticking = false;
            });
            ticking = true;
        }
    });
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(20px)';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease, transform 1s ease';
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    }, 100);
});