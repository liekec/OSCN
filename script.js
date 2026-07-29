document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
  // mobile dropdown taps
  document.querySelectorAll('.dropdown > a').forEach(a => {
    a.addEventListener('click', (e) => {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        a.parentElement.classList.toggle('open');
      }
    });
  });

  const revealEls = document.querySelectorAll('.reveal-target');
  revealEls.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold: 0.08});
  revealEls.forEach(el => io.observe(el));
});
