const mainNav = document.getElementById("main-nav");
const menuPhone = document.getElementById("btn-mobile-nav");

const header = document.getElementById("header");
const closeMenu = document.getElementById("mobile-nav-close");

console.log(header.classList.contains("nav-open"));
// menuPhone.addEventListener("click", function () {
//   if (!header.classList.contains("nav-open")) {
//     header.classList.add("nav-open");
//     // closeMenu.style.display = "block";
//     console.log(header.classList.contains("nav-open"));
//   } else {
//     header.classList.remove("nav-open");
//     // closeMenu.style.display = "none";
//     console.log(header.classList.contains("nav-open"));
//   }
// });
menuPhone.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const links = document.querySelectorAll("a");
links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
  ///////////////////////////////////////////////////////////
  // Sticky navigation

  const sectionHeroEl = document.querySelector(".section-hero");

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);

      if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
      }

      if (ent.isIntersecting === true) {
        document.body.classList.remove("sticky");
      }
    },
    {
      // In the viewport
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );
  obs.observe(sectionHeroEl);
});
