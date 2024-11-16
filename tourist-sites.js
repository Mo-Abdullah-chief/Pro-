// Add event listeners for sidebar links
const sidebarLinks = document.querySelectorAll('.left-sidebar a');

sidebarLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').replace('.html', '');
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});


