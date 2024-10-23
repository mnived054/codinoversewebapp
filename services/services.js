

document.querySelector('.transition-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const link = this.getAttribute('http://127.0.0.1:5501/templates/HomePage/Home.html');

   
    document.querySelector('.content').classList.add('fade-out');

    
    setTimeout(function() {
        window.location.href = 'http://127.0.0.1:5501/templates/HomePage/Home.html'
    }, 50); // Match this duration to the CSS transition time
});