// 画面スクロール時のヘッダーの挙動
window.addEventListener("load", changeHeaderPositionOnScroll);
function changeHeaderPositionOnScroll() {
  const header = document.querySelector("#header") as HTMLElement;
  let headerHeight = header.offsetHeight;
  let lastScrollPosition = 0;

  // ヘッダーのリサイズを監視
  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === header) {
        headerHeight = header.offsetHeight;
      }
    }
  });
  observer.observe(header);

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < lastScrollPosition) {
      header.style.top = "0";
    } else if (scrollPosition > headerHeight) {
      header.style.top = `-${headerHeight}px`;
    } else {
      header.style.top = "0";
    }
    lastScrollPosition = scrollPosition;
  });
}
