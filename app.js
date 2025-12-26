// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const body = document.body;

if (toggle) {
  toggle.addEventListener("click", () => {
    const open = body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Tilt effect (subtle)
const tilts = document.querySelectorAll(".tilt");

tilts.forEach((card) => {
  let rect;

  function onMove(ev) {
    rect = rect || card.getBoundingClientRect();
    const x = (ev.clientX - rect.left) / rect.width;   // 0..1
    const y = (ev.clientY - rect.top) / rect.height;  // 0..1
    const rx = (y - 0.5) * -8; // rotateX
    const ry = (x - 0.5) * 10; // rotateY
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-1px)`;
  }

  function onLeave() {
    rect = null;
    card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  }

  card.addEventListener("mousemove", onMove);
  card.addEventListener("mouseleave", onLeave);
});
