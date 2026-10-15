/* Floating top nav: reveal after the cover, highlight the visible section,
   and fade sections in as they enter the viewport. */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var nav = document.querySelector(".fixed-nav");
  var cover = document.getElementById("site-head");
  if (!nav || !cover) return;

  var links = Array.prototype.slice.call(nav.querySelectorAll('a.fn-item[href^="#"]'));
  var sections = links
    .map(function (link) { return document.getElementById(link.getAttribute("href").slice(1)); })
    .filter(function (section) { return section !== null; });

  /* Show the floating nav only once the cover is out of view */
  function toggleNavVisibility() {
    nav.classList.toggle("is-visible", window.scrollY > cover.offsetHeight - 120);
  }
  window.addEventListener("scroll", toggleNavVisibility, { passive: true });
  toggleNavVisibility();

  /* Highlight the nav item matching the section in the middle of the viewport */
  function setActive(id) {
    links.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + id);
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
    sections.forEach(function (section) { observer.observe(section); });

    /* Fade each section in the first time it approaches the viewport */
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          reveal.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });
    document.querySelectorAll(".post-holder").forEach(function (holder) {
      reveal.observe(holder);
    });
  }
})();
