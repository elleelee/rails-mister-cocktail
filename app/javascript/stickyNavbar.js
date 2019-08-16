// Get the navbar
const navbar = document.querySelector(".navbar");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const stickyNavbar = () => {
  document.addEventListener('scroll', () => {
    if (window.pageYOffset >= 360 ) {
      navbar.classList.remove("d-none");
    } else {
      navbar.classList.add("d-none");
    }
  })
};

export { stickyNavbar };
