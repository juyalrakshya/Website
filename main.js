// TYPING EFFECT

var typed = new Typed('.typing', {
    strings: [
        'Frontend Developer',
        'Creative Coder',
        'Cyberpunk Designer',
        'Interactive Web Developer'
    ],

    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

// CUSTOM CURSOR

const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// GSAP ANIMATIONS

gsap.from('header', {
    y: -100,
    opacity: 0,
    duration: 1
});

gsap.from('.hero-content', {
    x: -100,
    opacity: 0,
    duration: 1.5
});

gsap.from('.hero-image', {
    x: 100,
    opacity: 0,
    duration: 1.5
});

// VANILLA TILT

VanillaTilt.init(document.querySelector('.hero-image'), {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.4,
});