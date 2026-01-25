document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-effect');
    const command = "cat about.json";
    const aboutData = `{
    "name": "Brandon Thacker",
    "location": "Atlanta, Georgia",
    "roles": [
        "Father",
        "Software Engineer",
        "Game Developer",
        "Tech Enthusiast"
    ],
    "status": "Adapting to the ever-evolving tech landscape in the age of AI.",
    "hobbies": [
        "Cars",
        "Video Games",
        "Poker",
        "Traveling",
        "Collectibles",
        "Horror"
    ],
    "updated": "January, 2026"
}
`;
    // const fullText = "cat about.txt \n test 123";
    let charIndex = 0;

    function typeText() {
        if (charIndex < command.length) {
            typingElement.textContent += command.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 50 + Math.random() * 100); // Random typing speed
        } else if (charIndex === command.length) {
            // Emulate file reading delay or just output
            setTimeout(() => {
                typingElement.textContent += "\n" + aboutData;
            }, 300);
            charIndex++;
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
