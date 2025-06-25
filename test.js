(() => {
  const header = document.getElementById('fixedheader');
  let lastScroll = 0;
  let ticking = false;

  function onScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 25) {
      header.classList.remove('is-show');
    } else if (currentScroll > lastScroll) {
      // 下方向（非表示）
      header.classList.remove('is-show');
    } else {
      // 上方向（表示）
      header.classList.add('is-show');
    }

    lastScroll = currentScroll;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  });
})();
