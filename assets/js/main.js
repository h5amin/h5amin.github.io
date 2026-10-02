// "Book a call" buttons open in a new tab.
// The link itself lives in _config.yml (booking_url).
document.querySelectorAll("[data-book]").forEach((link) => {
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

// Let wide blog tables scroll sideways on phones instead of squashing.
document.querySelectorAll(".prose table").forEach((table) => {
  const wrap = document.createElement("div");
  wrap.className = "table-wrap";
  table.parentNode.insertBefore(wrap, table);
  wrap.appendChild(table);
});
