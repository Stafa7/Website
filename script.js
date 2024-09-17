// Scroll Animation with Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
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
});
