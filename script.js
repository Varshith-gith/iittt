// Parallax scrolling and sticky navigation functionality
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxImage = document.querySelector('.parallax-image');
    const parallaxContainer = document.querySelector('.parallax-container');
    const navbar = document.getElementById('navbar');
    const mainTitle = document.getElementById('main-title');
    
    // Parallax effect disabled - image stays fixed
    // if (parallaxImage && parallaxContainer) {
    //     const rate = scrolled * -0.5;
    //     parallaxImage.style.transform = `translateY(${rate}px)`;
    // }
    
    // Simple sticky navigation with black background
    if (navbar) {
        if (scrolled > 100) {
            navbar.classList.add('navbar-sticky');
        } else {
            navbar.classList.remove('navbar-sticky');
        }
    }
    
    // Title transition removed - title stays fixed
});

// Image Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
let autoSlideInterval;

function initCarousel() {
    if (slides.length === 0) return;
    
    updateCarousel();
    startAutoSlide();
}

function updateCarousel() {
    const carousel = document.querySelector('.image-carousel');
    if (carousel) {
        const offset = -currentSlide * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
}

function moveSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    updateCarousel();
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    }, 4000); // Auto-advance every 4 seconds
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        moveSlide(-1);
    } else if (e.key === 'ArrowRight') {
        moveSlide(1);
    }
});

// Initialize carousel when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
} else {
    initCarousel();
}

// Vision and Mission toggle functionality
function toggleVisionMission() {
    const content = document.getElementById('vision-mission-content');
    const arrow = document.getElementById('vision-arrow');
    
    if (content && arrow) {
        content.classList.toggle('collapsed');
        arrow.classList.toggle('rotate-180');
    }
}