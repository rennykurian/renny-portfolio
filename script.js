(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Theme toggle (remembers choice when storage is available)
  try {
    const saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
  } catch (_) {}
  document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    const isDark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = isDark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (_) {}
  });

  // Year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Nav border on scroll
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Active nav link
  const links = [...document.querySelectorAll(".nav__links a")];
  const sections = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => io.observe(s));

    // Reveal on scroll
    const revealEls = document.querySelectorAll(".section .two-col, .card, .job, .cred");
    if (!reduced) {
      revealEls.forEach(el => el.classList.add("reveal"));
      const rio = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rio.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -10% 0px" });
      revealEls.forEach(el => rio.observe(el));
    }
  }

  // Terminal: print lines one by one
  const code = document.querySelector(".runner__body code");
  if (code && !reduced) {
    const lines = code.innerHTML.split("\n");
    code.innerHTML = lines.map(l => `<span class="line">${l || " "}</span>`).join("\n");
    const spans = code.querySelectorAll(".line");
    spans.forEach((s, i) => setTimeout(() => s.classList.add("on"), 250 + i * 140));
  }
})();
