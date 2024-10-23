

document.querySelector('.transition-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const link = this.getAttribute('http://127.0.0.1:5501/templates/services/Services.html#');

   
    document.querySelector('.content').classList.add('fade-out');

    
    setTimeout(function() {
        window.location.href = 'http://127.0.0.1:5501/templates/services/Services.html'
    }, 50); // Match this duration to the CSS transition time
});

document.querySelector('.aboutus-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const link = this.getAttribute('http://127.0.0.1:5501/templates/About%20us/aboutus.html');

   
    document.querySelector('.content').classList.add('fade-out');

    
    setTimeout(function() {
        window.location.href = 'http://127.0.0.1:5501/templates/About%20us/aboutus.html'
    }, 50); // Match this duration to the CSS transition time
});

document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = document.querySelectorAll('.fade-in');

    const options = {
        root: null, // Use the viewport
        threshold: 0.1 // Trigger when 10% of the post is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add class to trigger transition
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    }, options);

    blogPosts.forEach(post => {
        observer.observe(post); // Observe each blog post
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const imagesToPreload = [
    '/templates/images/logo.png',
    '/templates/images/ourvaluebg.jpg',
    '/templates/images/AdobeStock_242955377_Preview.jpeg',
    '/templates/images/custom_sw_devlop-removebg-preview.png',
    '/templates/images/no-code-1.png',
    '/templates/images/scala-rust-go-1.png',
    '/templates/images/logo copy.png',

];

imagesToPreload.forEach((src) => {
    const img = new Image();
    img.src = src;
});
