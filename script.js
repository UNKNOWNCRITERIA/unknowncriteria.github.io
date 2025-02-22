let clickCount = 0;

function nextStep() {
    clickCount++;

    if (clickCount === 1) {
        document.getElementById("welcome-text").innerText = "to Intangible Network Official";
    } else if (clickCount === 2) {
        document.getElementById("welcome-text").innerText = "By Rahul Kumar";
    } else if (clickCount === 3) {
        document.getElementById("welcome-screen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("welcome-screen").style.display = "none";
            document.getElementById("main-content").classList.remove("hidden");
            startBackgroundAnimation();
        }, 500);
    }
}

// Background animation effect
function startBackgroundAnimation() {
    const body = document.body;
    for (let i = 0; i < 50; i++) {
        let particle = document.createElement("div");
        particle.className = "particle";
        body.appendChild(particle);

        let animDuration = Math.random() * 5 + 2;
        let size = Math.random() * 6 + 2;
        let position = Math.random() * 100;

        particle.style.width = ${size}px;
        particle.style.height = ${size}px;
        particle.style.left = ${position}%;
        particle.style.animationDuration = ${animDuration}s;
    }
}
