// ===============================
// DZ Košnja & Urejanje okolice
// Script.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    console.log("DZ Košnja website loaded");
  
    /* ===============================
       FADE-IN ON SCROLL
    =============================== */
    const elements = document.querySelectorAll(
      ".section, .service-box, .cta"
    );
  
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
  
      elements.forEach((el) => observer.observe(el));
    } else {
      // fallback za stare brskalnike
      elements.forEach((el) => el.classList.add("fade-in"));
    }
  
    /* ===============================
       SMOOTH SCROLL (menu / anchors)
    =============================== */
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach((link) => {
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
    backToTop.innerText = "⬆";
    backToTop.setAttribute("aria-label", "Nazaj na vrh");
    backToTop.style.cssText = `
      position: fixed;
      bottom: 25px;
      right: 25px;
      padding: 10px 14px;
      font-size: 18px;
      border: none;
      border-radius: 50%;
      background: #2e7d32;
      color: #fff;
      cursor: pointer;
      display: none;
      z-index: 999;
    `;
  
    document.body.appendChild(backToTop);
  
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });
  
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  