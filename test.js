(() => {
  const header = document.getElementById('fixedheader');
  const vector = document.getElementById('vector2');
  let lastScroll = window.pageYOffset;
  let ticking = false;

  function handleScroll() {
    const currentScroll = window.pageYOffset;

    // fixedheader の表示・非表示（上スクロール時に表示）
    if (currentScroll <= 25) {
      header.classList.remove('is-show');
    } else if (currentScroll < lastScroll) {
      header.classList.add('is-show');
    } else {
      header.classList.remove('is-show');
    }

    // vector2 の縮小処理（1px 以上スクロールで縮小）
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

  // scroll イベント最適化
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  });

  // 初回スクロール位置に応じて状態を設定
  window.addEventListener('DOMContentLoaded', handleScroll);
})();
