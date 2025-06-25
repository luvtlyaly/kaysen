window.onload = () => {
  const header = document.getElementById('fixedheader');
  const vector = document.getElementById('vector2');

  let lastScroll = window.pageYOffset;
  let ticking = false;

  function handleScroll() {
    const currentScroll = window.pageYOffset;

    // fixedheader 表示制御（上スクロールで表示、下スクロールで非表示）
    if (currentScroll <= 25) {
      header.classList.remove('is-show');
    } else if (currentScroll < lastScroll - 5) {
      // -5 でわずかなブレを無視（安定性向上）
      header.classList.add('is-show');
    } else if (currentScroll > lastScroll + 5) {
      header.classList.remove('is-show');
    }

    // vector2 ロゴ縮小制御
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

  // スクロールイベントを最適化して呼び出し
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  });

  // 初期スクロール状態を反映
  handleScroll();
};
