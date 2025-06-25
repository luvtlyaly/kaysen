(function () {
  const fh = document.getElementById('fixedheader');
  const isUp = (function () {
    const scrollElement = document.scrollingElement;
    let flag, prePoint = 0, scrollPoint;
    return function () {
      scrollPoint = scrollElement.scrollTop;
      flag = prePoint > scrollPoint ? true : false;
      prePoint = scrollPoint;
      return flag;
    }
  }());

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 25) {
      if (isUp()) {
        fh.classList.remove('is-show');
      } else {
        fh.classList.add('is-show');
      }
    } else {
      fh.classList.remove('is-show');
    }
  });
}());

(function () {
  const fh = document.getElementById('vector2');
  if (!fh) return;
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1) {
      fh.classList.add('is-show2');
    } else {
      fh.classList.remove('is-show2');
    }
  });
}());
