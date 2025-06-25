(() => {
  const header = document.getElementById('fixedheader');
  const vector = document.getElementById('vector2');
  let lastScroll = window.pageYOffset;
  let ticking = false;

  function handleScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 25) {
      header.classList.remove('is-show');
    } else if (currentScroll < lastScroll) {
      header.classList.add('is-show');
    } else {
      header.classList.remove('is-show');
    }

    if (vector) {
      vector.classList.toggle('is-show2', currentScroll > 1);
    }

    lastScroll = currentScroll;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  });

  window.addEventListener('load', handleScroll);
})();
