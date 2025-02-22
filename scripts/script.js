// 3-Click Welcome Screen
let clickCount = 0;
const welcomeButton = document.getElementById('welcome-button');
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');

welcomeButton.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 3) {
    welcomeScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');
    mainContent.classList.add('fade-in');
  } else {
    welcomeButton.textContent = Click ${3 - clickCount} more times;
  }
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Add dark mode styles dynamically
const style = document.createElement('style');
style.innerHTML = 
  .dark-mode {
    background-color: #121212;
    color: #ffffff;
  }
  .dark-mode header {
    background-color: #1f1f1f;
  }
  .dark-mode footer {
    background-color: #1f1f1f;
  }
;
document.head.appendChild(style);

// Generate Stars
const starsContainer = document.querySelector('.stars');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = ${Math.random() * 100}%;
  star.style.left = ${Math.random() * 100}%;
  star.style.animationDelay = ${Math.random() * 2}s;
  starsContainer.appendChild(star);
}
