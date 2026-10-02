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

// Animate bar charts in blog posts when they scroll into view.
const charts = document.querySelectorAll(".bar-chart");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (charts.length && "IntersectionObserver" in window && !reduceMotion) {
  const countUp = (el, delay) => {
    const target = Number(el.dataset.count);
    const duration = 700;
    el.textContent = "0";
    setTimeout(() => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const chart = entry.target;
      chart.classList.add("in-view");
      chart.querySelectorAll(".bar-rows li").forEach((row, i) => {
        row.querySelectorAll("[data-count]").forEach((num, j) => {
          countUp(num, i * 140 + j * 180 + 600);
        });
      });
      observer.unobserve(chart);
    });
  }, { threshold: 0.3 });

  charts.forEach((chart) => {
    chart.classList.add("is-animated");
    observer.observe(chart);
  });
}
