// main.js

// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Form submission handler (basic simulation)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const status = document.createElement("div");
    status.id = "form-status";
    form.appendChild(status);

    form.addEventListener("submit", e => {
        e.preventDefault();
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        if (!name || !email || !message) {
            status.textContent = "Please fill in all fields.";
            status.style.color = "yellow";
            return;
        }

        status.textContent = "Sending...";
        status.style.color = "lightblue";

        // Simulate sending
        setTimeout(() => {
            status.textContent = "Message sent successfully!";
            status.style.color = "limegreen";
            form.reset();
        }, 1500);
    });
});

// Fade-in on scroll for sections
const revealElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
});
