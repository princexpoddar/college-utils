/**
 * Mobile Menu Toggle Script
 * Handles hamburger menu functionality for responsive navigation
 */
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        // Toggle menu on click
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});
