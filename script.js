document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById("welcome-screen");
    let clickCount = 0;

    welcomeScreen.addEventListener("click", () => {
        clickCount++;
        if (clickCount === 3) {
            welcomeScreen.style.opacity = "0";
            setTimeout(() => {
                welcomeScreen.style.display = "none";
                document.getElementById("main-content").classList.remove("hidden");
                startParticles(); // Start animation
            }, 500);
        }
    });
});

// Background animation
function startParticles() {
    const particleContainer = document.createElement("div");
    particleContainer.style.position = "fixed";
    particleContainer.style.width = "100vw";
    particleContainer.style.height = "100vh";
    particleContainer.style.overflow = "hidden";
    particleContainer.style.zIndex = "-1";
    document.body.appendChild(particleContainer);

    setInterval(() => {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        let size = Math.random() * 10 + 5;
        particle.style.width = ${size}px;
        particle.style.height = ${size}px;
        particle.style.left = ${Math.random() * 100}vw;
        particle.style.animationDuration = ${Math.random() * 5 + 2}s;

        particleContainer.appendChild(particle);
        setTimeout(() => {
            particle.remove();
        }, 7000);
    }, 200);
}
