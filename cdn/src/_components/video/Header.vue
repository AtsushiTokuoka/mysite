<template>
  <header ref="Header" class="Header">
    <div class="Header__inner">
      <h1 class="Header__logo">
        <a href="/">
          <img src="/logo/logo_transparent.png" alt="T.K Media" width="200" />
        </a>
      </h1>
    </div>
  </header>
</template>

<docs>
  ```vue
  <v-header />
  ```
</docs>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "VHeader",
  setup() {
    /**
     * ヘッダーコンポーネント
     * @module Header
     * @vue-prop {Object} store - Vuex ストアオブジェクト
     * @vue-ref {HTMLElement} Header - ヘッダー要素の参照
     * @vue-data {ResizeObserver} resizeObserver - リサイズ監視オブジェクト
     * @vue-method setHeaderHeight - ヘッダーの高さを設定するメソッド
     * @vue-lifecycle-hook onMounted - リサイズ監視を開始
     * @vue-lifecycle-hook onUnmounted -  リサイズ監視を止める
     */
    const store = useStore();

    const Header = ref<HTMLElement>();

    let resizeObserver: ResizeObserver;

    const setHeaderHeight = () => {
      store.dispatch("setHeaderHeight", { height: Header.value?.offsetHeight });
    };

    onMounted(() => {
      resizeObserver = new ResizeObserver(() => setHeaderHeight());
      resizeObserver.observe(Header.value!);
    });

    onUnmounted(() => {
      if (resizeObserver && Header.value) {
        resizeObserver.unobserve(Header.value);
      }
    });

    return {
      Header,
      setHeaderHeight,
    };
  },
});
</script>

<style lang="scss" scoped>
.Header {
  background-color: $videoDarkColor01;
  color: $videoLightColor;
  padding: 10px 0;
  border-bottom: 1px solid $videoDarkColor03;
  &__inner {
    @include Container() {
      text-align: center;
      font-size: 0;
    }
  }
  &__logo {
    display: inline-block;
    line-height: 1;
    width: 80px;
  }
}
</style>
