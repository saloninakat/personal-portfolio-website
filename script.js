// =========================================
// TYPING ANIMATION
// =========================================

const typingText = document.getElementById("typing-text");

const roles = [
    "Java Developer",
    "Software Developer",
    "AI/ML Enthusiast",
    "Problem Solver"
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 60;
const pauseTime = 1500;

function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {

        typingText.textContent = currentRole.substring(
            0,
            characterIndex - 1
        );

        characterIndex--;

    } else {

        typingText.textContent = currentRole.substring(
            0,
            characterIndex + 1
        );

        characterIndex++;

    }

    if (
        !isDeleting &&
        characterIndex === currentRole.length
    ) {

        isDeleting = true;

        setTimeout(typeEffect, pauseTime);

        return;

    }

    if (
        isDeleting &&
        characterIndex === 0
    ) {

        isDeleting = false;

        roleIndex = (roleIndex + 1) % roles.length;

    }

    setTimeout(
        typeEffect,
        isDeleting ? deletingSpeed : typingSpeed
    );

}

typeEffect();


// =========================================
// SMOOTH SCROLL
// =========================================
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        const href = this.getAttribute('href');

        // Only smooth scroll for section links
        if (href.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }

    });

});


// =========================================
// STICKY NAVBAR
// =========================================

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});


// =========================================
// SCROLL REVEAL
// =========================================

const reveals = document.querySelectorAll(

    ".hero, .about-section, .skills-section, .projects-section, .timeline-section, .contact-section"

);

function revealSection() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();


// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =========================================
// BACK TO TOP
// =========================================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

//==================== MOBILE MENU ====================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    }else{

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});