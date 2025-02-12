const NavbarToggle = document.querySelector(".mobile-nav-toggle");

const primaryNavbar = document.querySelector(".primary-navbar");

// const scrollNav = document.querySelector(".body");

NavbarToggle.addEventListener("click", () => {
  primaryNavbar.hasAttribute("data-visible")
    ? NavbarToggle.setAttribute("aria-expanded", false)
    : NavbarToggle.setAttribute("aria-expanded", true);

  primaryNavbar.toggleAttribute("data-visible");

  // scrollNav.classList.toggle("scroll-off");
});
