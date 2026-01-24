document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-effect');
    const textToType = ""; // Unused
    const fullText = "./welcome.sh";
    let charIndex = 0;

    function typeText() {
        if (charIndex < fullText.length) {
            typingElement.textContent += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 50 + Math.random() * 100); // Random typing speed
        }
    }

    // Start typing after a short delay
    setTimeout(typeText, 1000);

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Optional: Add a 'loading' flash or simple scroll
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Add a blink effect to the target section title
                const title = targetElement.querySelector('h2');
                if (title) {
                    title.style.animation = 'none';
                    title.offsetHeight; /* trigger reflow */
                    title.style.animation = 'flicker 0.2s 3';
                }
            }
        });
    });
});
