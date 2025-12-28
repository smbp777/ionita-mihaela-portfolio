document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
      const mainNav = document.getElementById("mainNav");
      const hamburger = document.getElementById("hamburger");
      mainNav.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
});
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");

if (hamburger && mainNav) {
  hamburger.addEventListener("click", () => {
    const isActive = mainNav.classList.toggle("active");
    const isExpanded = mainNav.classList.contains("active");
    hamburger.setAttribute("aria-expanded", isExpanded);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const isDark = localStorage.getItem("theme") === "dark";
  if (isDark) {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isNowDark = body.classList.contains("dark-mode");
    themeToggle.textContent = isNowDark ? "☀️" : "🌓";
    localStorage.setItem("theme", isNowDark ? "dark" : "light");
  });
});
