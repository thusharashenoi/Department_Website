document.addEventListener("DOMContentLoaded", function() {
    // Add smooth scrolling to all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            
            // Get the target section's ID from the href attribute
            var target = document.querySelector(this.getAttribute("href"));
            
            // Scroll smoothly to the target section
            target.scrollIntoView({
                behavior: "smooth",
                block: "start", // Scroll to the top of the target
                inline: "nearest", // Align to the nearest edge
                duration: 54000000
            });
        });
    });
});

// script.js
const animateText = document.querySelector('.Council');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5, // Adjust as needed
};
