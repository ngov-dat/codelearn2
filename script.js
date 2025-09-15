document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Function to add scroll-based animations using Anime.js
    function initScrollAnimations() {
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionId = section.id;
            const targets = section.querySelectorAll('.animate-block, .animate-card, .animate-item, .animate-cta-text, .animate-btn');

            if (targets.length > 0) {
                // Initialize Anime.js ScrollObserver for each section
                anime({
                    targets: targets,
                    translateY: ['50px', '0'],
                    opacity: [0, 1],
                    easing: 'easeOutQuad',
                    duration: 800,
                    delay: anime.stagger(150),
                    autoplay: false,
                    // Use a ScrollObserver to trigger the animation
                    // This is a more modern approach than a basic IntersectionObserver
                    autoplay: anime.onScroll({
                        targets: section,
                        // This threshold defines when the animation should start
                        enter: 'top-=150px', 
                        // The `sync` mode ensures the animation progress is tied to the scroll position
                        sync: 'in'
                    })
                });
            }
        });
    }

    // Call the function to set up animations on page load
    initScrollAnimations();
});
