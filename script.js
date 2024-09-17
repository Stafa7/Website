document.addEventListener("DOMContentLoaded", function () {
    // Scroll Animation with Intersection Observer
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
        root: null,
        threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, observerOptions);
    fadeInElements.forEach(el => observer.observe(el));

    // Category Filter
    const buttons = document.querySelectorAll(".category-buttons button");
    const portfolioItems = document.querySelectorAll(".portfolio-grid img");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            portfolioItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                    item.classList.add('fade-in');
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Modal functionality
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
    const images = document.querySelectorAll(".portfolio-item");

    images.forEach(img => {
        img.addEvent
