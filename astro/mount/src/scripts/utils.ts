/* -------------------------------------------------------------
 メインコンテンツエリアに対して、ヘッダー・フッターの高さを考慮して
 min-heightを設定する
---------------------------------------------------------------*/
export function setContentLayout(): void {
  const header = document.querySelector("header") as HTMLElement;
  const footer = document.querySelector("footer") as HTMLElement;
  const contents = document.querySelector("main") as HTMLElement;

  if (header && footer && contents) {
    const contentsMinHeight =
      window.innerHeight - header.clientHeight - footer.clientHeight;
    contents.style.minHeight = `${contentsMinHeight}px`;
  }
}

/* -------------------------------------------------------------
  Modal.vueでmodalIdを監視して、モーダルを表示する仕様にしているため、
  data-modal-idにセットされたidを、nanostoresのmodalIdにセットする
---------------------------------------------------------------*/
import { modalId } from "@/store/index.ts";
export function setupModalTriggers(): void {
  window.addEventListener("load", () => {
    const modalTriggers = Array.from(
      document.querySelectorAll("[data-modal-id]")
    );
    modalTriggers.forEach((el) => {
      el.addEventListener("click", (e) => {
        console.log(el.getAttribute("data-modal-id"));
        const id = el.getAttribute("data-modal-id");
        if (id !== null) {
          modalId.set(id);
        }
      });
    });
  });
}

/* -------------------------------------------------------------
  smooth scroll
---------------------------------------------------------------*/
export function smoothScroll(target: string, duration: number = 500): void {
  const targetElement = document.querySelector(target);
  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
