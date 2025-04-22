/**
 * We Care Auto - Main JavaScript
 * A modern website for an auto repair workshop owned by M&B Auto Group
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initBackToTop();
    initSmoothScroll();
    initAppointmentForm();
    initNavbarActive();
});

/**
 * Back to Top Button Functionality
 */
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        document.querySelector('.navbar-toggler').click();
                    }
                }
            }
        });
    });
}

/**
 * Appointment Form Handling
 */
function initAppointmentForm() {
    const appointmentForm = document.getElementById('appointmentForm');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the form data to a server
            // For demo purposes, we'll just show a success message
            
            // Get form data
            const formData = new FormData(appointmentForm);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            console.log('Form submitted:', formDataObj);
            
            // Show success message
            const formContainer = appointmentForm.parentElement;
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-3';
            successMessage.innerHTML = '<strong>Success!</strong> Your appointment request has been submitted. We will contact you shortly to confirm.';
            
            formContainer.appendChild(successMessage);
            
            // Reset form
            appointmentForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
}

/**
 * Navbar Active Link Handling
 */
function initNavbarActive() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            } else if (current === '' && link.getAttribute('href') === 'index.html') {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Testimonial Carousel (if needed in the future)
 */
function initTestimonialCarousel() {
    // This function can be implemented if a carousel is needed
    // For now, we're using a static grid layout for testimonials
}

/**
 * Service Gallery (if needed in the future)
 */
function initServiceGallery() {
    // This function can be implemented if a gallery is needed
    // For now, we're using a static grid layout for services
}
