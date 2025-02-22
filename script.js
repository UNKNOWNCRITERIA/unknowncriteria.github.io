// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};

// Scroll Animation (GSAP)
gsap.from(".feature-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".features",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// AI-powered text effect (Typewriter)
const phrases = ["Next-Level Experience!", "Google-powered Webpage!", "AI-Powered Animations!"];
let currentPhrase = 0;
let currentChar = 0;
const typeEffect = document.querySelector("#type-effect");

const typeText = () => {
    if (currentChar < phrases[currentPhrase].length) {
        typeEffect.textContent += phrases[currentPhrase][currentChar];
        currentChar++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(() => {
            typeEffect.textContent = "";
            currentChar = 0;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            typeText();
        }, 2000);
    }
};
typeText();

// Background animation
document.addEventListener("mousemove", (e) => {
    let x = e.clientX / window.innerWidth - 0.5;
    let y = e.clientY / window.innerHeight - 0.5;
    document.body.style.backgroundPosition = ${x * 10}px ${y * 10}px;
});
