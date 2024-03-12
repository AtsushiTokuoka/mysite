import $ from 'jquery';

export default function smoothScroll(target: string,duration: number) {

  const targetElement = $(target);
  const targetPosition = targetElement.offset()?.top;
  const startPosition = window.scrollY;
  // const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation() {
    console.log('animation');
    
  }

  requestAnimationFrame(animation);
}

