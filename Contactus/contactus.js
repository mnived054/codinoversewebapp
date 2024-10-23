 document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Retrieve form values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const description = document.getElementById('description').value;

        // Simulate a form submission response
        document.getElementById('responseMessage').innerText = `Thank you, ${fullName}! Your message has been sent.`;
        
        // Clear the form
        document.getElementById('contactForm').reset();
    });

// document.querySelector('.transition-link').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default anchor behavior
//     const link = this.getAttribute('http://127.0.0.1:5501/templates/services/Services.html#');

   
//     document.querySelector('.content').classList.add('fade-out');

    
//     setTimeout(function() {
//         window.location.href = 'http://127.0.0.1:5501/templates/services/Services.html'
//     }, 50); // Match this duration to the CSS transition time
// });

// document.querySelector('.aboutus-link').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default anchor behavior
//     const link = this.getAttribute('http://127.0.0.1:5501/templates/About%20us/aboutus.html');

   
//     document.querySelector('.content').classList.add('fade-out');

    
//     setTimeout(function() {
//         window.location.href = 'http://127.0.0.1:5501/templates/About%20us/aboutus.html'
//     }, 50); // Match this duration to the CSS transition time
// });



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;


    if (name && email && description) {
        const modalMessage = document.getElementById('modal-message');
        modalMessage.innerText = `Thank you for your submission, ${name}`;
        
       const modal = document.getElementById('modal');
        modal.style.display = "block";

        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});


document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


const selectElement = document.getElementById('select');
        selectElement.addEventListener('change', (event) => {
            console.log(`Selected select: ${event.target.value}`);
        });

        function aaa() {
            console.log('cccc')
          }
          
          
          
       