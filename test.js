(() => {
  const header = document.getElementById('fixedheader');
  let lastScroll = 0;
  let ticking = false;

  function onScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 25) {
      header.classList.remove('is-show');
    } else if (currentScroll > lastScroll) {
      // 下スクロール → 表示
      header.classList.add('is-show');
    } else {
      // 上スクロール → 非表示
      header.classList.remove('is-show');
    }

    lastScroll = currentScroll;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  });
})();

(() => {
  const logo = document.getElementById('vector2');
  if (!logo) return;

  window.addEventListener('scroll', () => {
    logo.classList.toggle('is-show2', window.pageYOffset > 1);
  });
})();
