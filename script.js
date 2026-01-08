// ===============================
// DZ Košnja & Urejanje okolice
// scripts.js (Production Ready)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     FADE-IN ON SCROLL
  =============================== */
  const animatedElements = document.querySelectorAll(
    ".section, .service-box, .cta, .navbar"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedElements.forEach((el) => observer.observe(el));
  } else {
    animatedElements.forEach((el) => el.classList.add("fade-in"));
  }

  /* ===============================
     SMOOTH SCROLL (INTERNAL ANCHORS)
  =============================== */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ===============================
     BACK TO TOP BUTTON
  =============================== */
  const backToTop = document.createElement("button");
  backToTop.className = "back-to-top";
  backToTop.setAttribute("aria-label", "Nazaj na vrh");
  backToTop.innerHTML = "⬆";

  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 300);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ===============================
     OPTIONAL: HIDE BACK TO TOP ON VERY SMALL SCREENS
  =============================== */
  if (window.innerWidth < 480) {
    backToTop.style.display = "none";
  }

});
