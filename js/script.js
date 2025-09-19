var typed = new Typed("#element", {
  strings: ["Designer", "Developer", "Freelancer", "Photographer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
});

let scrollTop = document.querySelector(".scroll-top");
if (scrollTop) {
  const toggleScrollTop = () => {
    if (window.scrollY > 100) {
      scrollTop.classList.add("active");
    } else {
      scrollTop.classList.remove("active");
    }
  };
  window.addEventListener("scroll", toggleScrollTop);
}
