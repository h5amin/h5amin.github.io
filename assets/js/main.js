// Paste your booking link (Calendly, SavvyCal, etc.) between the quotes.
// Every "Book a call" button on the page will use it.
// If you empty it, those buttons go to your LinkedIn profile instead.
const BOOKING_URL = "https://app.reclaim.ai/m/hiba-amin/connect";
const FALLBACK_URL = "https://www.linkedin.com/in/hibaamin/";

document.querySelectorAll("[data-book]").forEach((link) => {
  link.href = BOOKING_URL || FALLBACK_URL;
  link.target = "_blank";
  link.rel = "noopener";
});

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("is-open", !open);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
