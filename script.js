// Import GSAP & Three.js for Animation
import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js";

// Background Animation
const bgAnimation = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";

    let particles = [];
    const numParticles = 50;
    const colors = ["#ff4081", "#1e90ff", "#ffcc00", "#00ffcc"];

    // Initialize Canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Particle Class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 4 + 2;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Create Particles
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
};

// GSAP Welcome Animation
const welcomeAnimation = () => {
    gsap.to("#welcome-screen", { opacity: 1, duration: 1.5, ease: "power2.out" });
    setTimeout(() => {
        gsap.to("#welcome-screen", { opacity: 0, duration: 1.5, onComplete: () => {
            document.getElementById("welcome-screen").style.display = "none";
            document.getElementById("main-content").classList.remove("hidden");
            gsap.from("#main-content", { opacity: 0, y: 50, duration: 1.5, ease: "power2.out" });
        }});
    }, 3000);
};

// Initialize Animations
document.addEventListener("DOMContentLoaded", () => {
    bgAnimation();
    welcomeAnimation();
});
