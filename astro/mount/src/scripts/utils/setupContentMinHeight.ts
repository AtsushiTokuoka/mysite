export default (): void => {
  const $header = document.querySelector("header") as HTMLElement;
  const $footer = document.querySelector("footer") as HTMLElement;
  const $contents = document.querySelector("main") as HTMLElement;

  if ($header && $footer && $contents) {
    const contentsMinHeight =
      window.innerHeight - $header.clientHeight - $footer.clientHeight;
    $contents.style.minHeight = `${contentsMinHeight}px`;
    $contents.style.marginBottom = `${$footer.clientHeight}px`;
  }
};
