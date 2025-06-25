document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('fixedheader');
  const vector2 = document.getElementById('vector2');
  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  let rafId = null;

  window.addEventListener('scroll', () => {
    // スクロールイベント発生時に前のフレーム予約をキャンセルし、新たに予約
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const currentY = window.pageYOffset || document.documentElement.scrollTop;

      // fixedheaderの表示・非表示制御
      if (currentY > 25) {
        if (currentY < lastScrollY) {
          // 上方向スクロール -> ヘッダー非表示
          header.classList.remove('is-show');
        } else if (currentY > lastScrollY) {
          // 下方向スクロール -> ヘッダー表示
          header.classList.add('is-show');
        }
      } else {
        // 閾値25px以内なら常に非表示
        header.classList.remove('is-show');
      }

      // vector2のサイズ制御
      if (currentY >= 1) {
        // 1px以上スクロールで縮小クラス付与
        vector2.classList.add('is-show2');
      } else {
        // ページ先頭付近ではクラス除去（元サイズ）
        vector2.classList.remove('is-show2');
      }

      // 次回比較用に前回のスクロール位置を保存
      lastScrollY = currentY;
    });
  }, { passive: true });
});
