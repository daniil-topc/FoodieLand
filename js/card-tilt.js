(() => {
  const motion = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');

  document.querySelectorAll('.recipes-item, .recipes-item-poster, .hero-button').forEach((card) => {
    const area = document.createElement('div');
    area.className = card.matches('.hero-button') ? 't-tilt t-tilt--button' : 't-tilt';
    card.before(area);
    area.append(card);
    card.classList.add('t-tilt-card');

    const glare = document.createElement('div');
    glare.className = 't-tilt-glare';
    glare.setAttribute('aria-hidden', 'true');
    card.append(glare);

    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      area.classList.remove('is-hover');
      card.classList.remove('is-tilting');
      card.style.setProperty('--tilt-rx', '0deg');
      card.style.setProperty('--tilt-ry', '0deg');
    };

    area.addEventListener('pointermove', (event) => {
      if (!motion.matches || event.pointerType === 'touch') return;
      const rect = area.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        area.classList.add('is-hover');
        card.classList.add('is-tilting');
        card.style.setProperty('--tilt-rx', `${(0.5 - y) * 12}deg`);
        card.style.setProperty('--tilt-ry', `${(x - 0.5) * 12}deg`);
        card.style.setProperty('--tilt-gx', `${x * 100}%`);
        card.style.setProperty('--tilt-gy', `${y * 100}%`);
      });
    });

    area.addEventListener('pointerleave', reset);
    area.addEventListener('pointercancel', reset);
    window.addEventListener('blur', reset);
    motion.addEventListener('change', reset);
  });
})();
