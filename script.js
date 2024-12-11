// script.js

// Set the target date for the countdown (21st December 2024)
const countdownDate = new Date("Dec 21, 2024 00:00:00").getTime();

const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown-timer").innerHTML = "The day has arrived! 💖";
    }
}, 1000);

// Add more love quotes in your script.js file
const quotes = [
  "You are my sunshine on a rainy day. 💖",
  "I never want to stop making memories with you. 🌹",
  "You are the best thing that's ever been mine. 💌",
  "我想與你一起變老. ❤️"
];

// Show a random quote
const quoteElement = document.getElementById('quote');
quoteElement.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
// script.js

// Function to generate floating hearts
function createFloatingHearts() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Randomize the heart's position on the screen
  const x = Math.random() * window.innerWidth;
  const delay = Math.random() * 5; // Random delay for staggered animations
  heart.style.left = `${x}px`;
  heart.style.animationDelay = `-${delay}s`;

  // Optionally add glowing effect after a delay
  setTimeout(() => {
      heart.classList.add('glowing');
  }, delay * 1000);

  document.body.appendChild(heart);

  // Remove the heart after animation completes
  setTimeout(() => {
      heart.remove();
  }, 4000);
}

// Create hearts every 0.5 seconds
setInterval(createFloatingHearts, 500);
