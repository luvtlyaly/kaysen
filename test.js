(() => {
  const header = document.getElementById('fixedheader');
  const vector = document.getElementById('vector2');
  let lastScroll = window.pageYOffset;
  let ticking = false;

  function handleScroll() {
    const currentScroll = window.pageYOffset;

    // fixedheaderの表示切り替え
    if (currentScroll <= 25) {
      header.classList.remove('is-show');
    } else if (currentScroll < lastScroll) {
      header.classList.add('is-show'); // 上スクロール
    } else {
      header.classList.remove('is-show'); // 下スクロール
    }

    // vector2の表示切り替え
    if (vector) {
      if (currentScroll > 1) {
        vector.classList.add('is-show2');
      } else {
        vector.classList.remove('is-show2');
      }
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

  // ページ読み込み完了後に初回呼び出し
  window.addEventListener('load', handleScroll);
})();
