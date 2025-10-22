// Smooth scroll for internal anchor links
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const href = anchor.getAttribute('href');
  if (!href || href.length < 2) return;
  const target = document.querySelector(href);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Basic fake form handler (demo only)
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', () => {
    alert('Thanks for your message! This demo does not send emails.');
  });
}

// Scroll reveal using IntersectionObserver
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        observer.unobserve(entry.target); // one-time reveal
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  // Fallback: show immediately
  revealEls.forEach(el => el.classList.add('reveal--visible'));
}


