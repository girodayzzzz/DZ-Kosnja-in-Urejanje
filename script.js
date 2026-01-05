// ===============================
// DZ Košnja & Urejanje okolice
// Script.js (Production Ready)
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    console.log("DZ Košnja website loaded");
  
    /* ===============================
       FADE-IN ON SCROLL
    =============================== */
    const elements = document.querySelectorAll(
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
  
      elements.forEach((el) => observer.observe(el));
    } else {
      elements.forEach((el) => el.classList.add("fade-in"));
    }
  
    /* ===============================
       SMOOTH SCROLL (anchors only)
    =============================== */
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const target = document.querySelector(link.getAttribute("href"));
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
  });
  