// Hamburger nav //
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Project section arrows //
const projectsWrapper = document.getElementById('projectsWrapper');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    const scrollAmount = projectsWrapper.offsetWidth;

    leftArrow.addEventListener('click', () => {
        projectsWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        projectsWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });