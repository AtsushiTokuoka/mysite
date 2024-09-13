import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";

// コンテンツエリアのvueインスタンスの共通設定
function setupContentsVueApp() {
  const store = useStore();
  const eleventyGlobalData = computed(() => store.state.eleventyGlobalData);
  const headerHeight = computed(() => store.state.headerHeight);
  const footerHeight = computed(() => store.state.footerHeight);
  const contentsMinHeight = ref(0);

  const updateContentsMinHeight = () => {
    contentsMinHeight.value =
      window.innerHeight - (headerHeight.value + footerHeight.value);
  };

  const updateBottomIconsPosition = () => {
    const bottomIcons = document.querySelector("#bottom-icons") as HTMLElement;
    if (bottomIcons) {
      bottomIcons.style.bottom = `${footerHeight.value}px`;
    }
  };

  watch([headerHeight, footerHeight], updateContentsMinHeight);
  watch([footerHeight], updateBottomIconsPosition);

  onMounted(() => {
    window.addEventListener("resize", updateContentsMinHeight);
    window.addEventListener("resize", updateBottomIconsPosition);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", updateContentsMinHeight);
    window.removeEventListener("resize", updateBottomIconsPosition);
  });

  return {
    headerHeight,
    footerHeight,
    contentsMinHeight,
    eleventyGlobalData,
  };
}

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

export { setupContentsVueApp };
