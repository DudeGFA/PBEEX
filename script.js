// Slideshow Functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Smooth Scrolling
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Toggle Mobile Menu
function toggleMenu() {
    document.getElementById("navbar").classList.toggle("show-menu");
}

// JavaScript to toggle FAQ answers
function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    const isVisible = answer.style.display === "block";

    // Hide all answers
    document.querySelectorAll('.faq-answer').forEach(el => el.style.display = "none");

    // Show the clicked answer if it was hidden
    if (!isVisible) {
        answer.style.display = "block";
    }
}

