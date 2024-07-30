const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".slider-container");
    const slides = Array.from(container.children);

    // Clone the slides for infinite effect
    slides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        container.appendChild(clone);
    });

    const updateSliderWidth = () => {
        let slidesToShow;

        if (window.innerWidth >= 1200) {
            slidesToShow = 3; // Desktop
        } else if (window.innerWidth >= 881) {
            slidesToShow = 2; // Tablet
        } else {
            slidesToShow = 1; // Mobile
        }

        container.style.width = `calc(100% * ${
            slides.length * 2
        } / ${slidesToShow})`;
    };

    // Initial setup
    updateSliderWidth();

    // Adjust on window resize
    window.addEventListener("resize", updateSliderWidth);
});