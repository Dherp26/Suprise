// Function to create sparkling stars and hearts in the background
function createSparkleEffect() {
  const sparkleContainer = document.querySelector('.sparkles-container');
  const sparkleCount = 30; // Number of sparkles
  const heartCount = 10; // Number of heart sparkles
  
  // Create stars
  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Randomize position and animation duration
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${Math.random() * 1 + 1}s`; // Random animation time between 1s and 2s
    
    sparkleContainer.appendChild(sparkle);
  }

  // Create hearts
  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart-sparkle');
    
    // Randomize position and animation duration
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 1 + 1}s`; // Random animation time between 1s and 2s
    
    sparkleContainer.appendChild(heart);
  }
}

// Trigger sparkle effect on page load
window.onload = createSparkleEffect;
