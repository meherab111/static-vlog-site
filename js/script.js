const NavbarToggle = document.querySelector(".mobile-nav-toggle");

const primaryNavbar = document.querySelector(".primary-navbar");

// responsive navbar functionality

NavbarToggle.addEventListener("click", () => {
  primaryNavbar.hasAttribute("data-visible")
    ? NavbarToggle.setAttribute("aria-expanded", false)
    : NavbarToggle.setAttribute("aria-expanded", true);

  primaryNavbar.toggleAttribute("data-visible");

});
