const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const links = [...document.querySelectorAll(".nav a")];
const currentPage = window.location.pathname.split("/").pop() || "index.html";

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

links.forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
  const href = link.getAttribute("href") || "";

  if (!href.startsWith("#")) {
    const targetPage = href.split("#")[0];
    link.classList.toggle("active", targetPage === currentPage);
  }
});

const hashLinks = links.filter((link) => (link.getAttribute("href") || "").startsWith("#"));
const sections = hashLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        hashLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
        });
      });
    },
    { rootMargin: "-42% 0px -45% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

const filterBox = document.getElementById("pubFilter");
const pubItems = [...document.querySelectorAll(".paper")];

filterBox?.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  const type = btn.dataset.type;

  filterBox.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("active"));
  btn.classList.add("active");

  pubItems.forEach((item) => {
    const visible = type === "all" || item.dataset.type === type;
    item.style.display = visible ? "block" : "none";
  });
});

const lastUpdatedEl = document.getElementById("lastUpdated");
if (lastUpdatedEl) {
  lastUpdatedEl.textContent = new Date().toISOString().slice(0, 10);
}
