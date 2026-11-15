const revealTargets = document.querySelectorAll('.about, .project-card, .contact-inner');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      target.classList.add('is-visible');
      observer.unobserve(target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach((target) => {
  target.classList.add('reveal');
  observer.observe(target);
});

