const menuToggle = document.querySelector('.menu-toggle');
const desktopNav = document.querySelector('.desktop-nav');

menuToggle.addEventListener('click', () => {
    desktopNav.style.display = desktopNav.style.display === 'block' ? 'none' : 'block';
});
// Add event listeners for country images
const countryImages = document.querySelectorAll('.country img');

countryImages.forEach((image) => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
  });
  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});


