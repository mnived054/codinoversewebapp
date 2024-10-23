


document.querySelector('.transition-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const link = this.getAttribute('http://127.0.0.1:5501/templates/services/Services.html');

   
    document.querySelector('.content').classList.add('fade-out');

    
    setTimeout(function() {
        window.location.href = 'http://127.0.0.1:5501/templates/services/Services.html'
    }, 50); // Match this duration to the CSS transition time
});


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    
    imagesToPreload.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
    

    

    





