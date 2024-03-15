<template>
  <footer class="Footer" ref="Footer">
    <div class="Footer__inner">
      <p>{{ message }}</p>
    </div>
  </footer>
</template>

<docs>
  ```vue
  <Footer />
  ```
</docs>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'Footer',
  setup() {
    /**
     * フッターコンポーネント
     * 
     * @module Footer
     * @vue-prop {Object} store - Vuex ストアオブジェクト
     * @vue-ref {HTMLElement} Footer - フッター要素の参照
     * @vue-data {ResizeObserver} resizeObserver - リサイズ監視オブジェクト
     * @vue-method setFooterHeight - フッターの高さを設定するメソッド
     * @vue-lifecycle-hook onMounted - リサイズ監視を開始
     * @vue-lifecycle-hook onUnmounted - リサイズ監視を止める
     */

    const store = useStore();

    const Footer = ref<HTMLElement>();

    let resizeObserver: ResizeObserver;

    const setFooterHeight = () => {
      store.dispatch('setFooterHeight', { height: Footer.value?.offsetHeight });
    };

    onMounted(() => {
      resizeObserver = new ResizeObserver(() => setFooterHeight());
      resizeObserver.observe(Footer.value!);
    });

    onUnmounted(() => {
      if (resizeObserver && Footer.value) {
        resizeObserver.unobserve(Footer.value);
      }
    });

    return {
      Footer,
      setFooterHeight,
      message: 'Footer.vue',
    };
  },
})
</script>

<style lang="scss" scoped>
  .Footer {
    background-color: $colorBaseLight;
    color: $colorBaseDark;
    padding: 18px 0;
    @include mq(tab) {
      padding: 24px 0;
    }
    @include mq(desktop) {
      padding: 30px 0;
    
    }
    &__inner {
      @include Container() {
        text-align: center;
        line-height: 1;
      }
    }
  }
</style>