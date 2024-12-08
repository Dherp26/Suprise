// Example interaction to enlarge image when clicked
const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('click', function() {
    this.style.transform = this.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
  });
});
