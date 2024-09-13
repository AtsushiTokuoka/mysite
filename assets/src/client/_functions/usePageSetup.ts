import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useStore } from "@/client/_store/index";

export default function usePageSetup() {
  const store = useStore();
  const eleventyGlobalData = computed(() => store.state.eleventyGlobalData);
  const headerHeight = computed(() => store.state.headerHeight);
  const footerHeight = computed(() => store.state.footerHeight);
  const contentsMinHeight = ref(0);

  // コンテンツエリアのvueインスタンスの共通設定
  // ヘッダー・フッターの高さを取得し、コンテンツエリアの最小高さを設定する
  const updateContentsMinHeight = () => {
    contentsMinHeight.value =
      window.innerHeight - (headerHeight.value + footerHeight.value);
  };
  watch([headerHeight, footerHeight], updateContentsMinHeight);

  // bottom-iconsのvueインスタンスの共通設定
  // フッターの高さを取得し、bottom-iconsの位置を調整する
  const updateBottomIconsPosition = () => {
    const bottomIcons = document.querySelector("#bottom-icons") as HTMLElement;
    if (bottomIcons) {
      bottomIcons.style.bottom = `${footerHeight.value}px`;
    }
  };
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
