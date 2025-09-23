// Hero Module - Typewriter effects and scroll indicator

export function initHero() {
    initTypewriter();
    initScrollIndicator();
}

function initTypewriter() {
    const greetingElement = document.getElementById('heroGreeting');
    const taglineElement = document.getElementById('heroTagline');

    if (greetingElement) {
        const greetings = ['Olá', 'Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo', '你好'];
        typewriterCycle(greetingElement, greetings, 2000);
    }

    if (taglineElement) {
        const taglines = [
            'Full-Stack Developer',
            'Problem Solver',
            'Tech Enthusiast',
            'Continuous Learner',
            'Code Craftsman'
        ];
        typewriterCycle(taglineElement, taglines, 3000);
    }
}

function typewriterCycle(element, texts, delay) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    function type() {
        const fullText = texts[textIndex];

        if (isDeleting) {
            currentText = fullText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = fullText.substring(0, charIndex + 1);
            charIndex++;
        }

        element.textContent = currentText;

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === fullText.length) {
            typeSpeed = delay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const nextSection = document.querySelector('#about-preview');
            const hero = document.querySelector('.hero');

            if (nextSection && hero) {
                // Calculate the exact position where hero ends
                const heroBottom = hero.offsetTop + hero.offsetHeight;

                // Scroll to just past the hero section
                // This ensures the hero is completely out of view
                window.scrollTo({
                    top: heroBottom,
                    behavior: 'smooth'
                });
            }
        });

        // Hide scroll indicator when user scrolls
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    scrollIndicator.style.opacity = '1';
                    scrollIndicator.style.pointerEvents = 'auto';
                }, 300);
            }
        }, { passive: true });
    }
}