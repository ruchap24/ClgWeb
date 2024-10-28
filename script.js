document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to the University of Example website!");
});

// Example: Smooth scroll to sections (if links are set up with IDs)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});




document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = this.elements['name'].value;
    const email = this.elements['email'].value;
    const message = this.elements['message'].value;

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Display submission confirmation
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Reset form after submission
    this.reset();
});

// Responsive navigation toggle (for mobile view)
const nav = document.querySelector('nav');
const toggleButton = document.createElement('button');
toggleButton.textContent = '☰';
toggleButton.style.cssText = `
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    font-size: 1.5em;
    cursor: pointer;
    display: none;
`;

document.body.appendChild(toggleButton);

// Display toggle button in smaller screens
function handleResize() {
    if (window.innerWidth < 768) {
        toggleButton.style.display = 'block';
        nav.style.display = 'none';
    } else {
        toggleButton.style.display = 'none';
        nav.style.display = 'flex';
    }
}
handleResize();
window.addEventListener('resize', handleResize);

// Toggle navigation visibility on button click
toggleButton.addEventListener('click', function () {
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});