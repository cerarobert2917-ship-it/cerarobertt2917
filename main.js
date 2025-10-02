
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // Toggles the mobile menu icon (bars <-> close)
    menuIcon.classList.toggle('fa-xmark');
    // Toggles the 'active' class to show/hide the navigation menu
    navbar.classList.toggle('active');
};


// Section scroll activation (Highlighting current link)
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // Remove 'active' from all links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add 'active' to the current section's link
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Sticky header on scroll
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Hide mobile menu after clicking a link
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


// Typing Text Effect for the Home section
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["It Student", "It Student", "It Student", "It Student"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay before starting to type new text

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        // Start erasing after a delay
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        // Move to the next word in the array
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        // Start typing the new word
        setTimeout(type, typingDelay + 1100);
    }
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay);
});