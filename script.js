document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar toggle for mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple animation for hamburger
        hamburger.classList.toggle('toggle');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links (handled by CSS, but good to have backup or dynamic padding adjustment if needed)
    
    // Header scroll effect (Glassmorphism intensity change)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Fade-in animation class injection
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in'); // Add initial class
        observer.observe(section);
    });

    // Form submission (Prevent default for demo)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sent!';
            btn.style.borderColor = '#00ff7f';
            btn.style.color = '#00ff7f';
            
            setTimeout(() => {
                contactForm.reset();
                btn.innerText = originalText;
                btn.style.borderColor = '';
                btn.style.color = '';
            }, 3000);
        });
    }
});
