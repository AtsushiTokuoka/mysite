<template>
  <footer class="Footer">
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
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Footer',
  setup() {
    return {
      message: 'Footer.vue',
    };
  },
})
</script>

<style lang="scss" scoped>
  .Footer {
    background-color: $colorBaseLight;
    color: $colorBaseDark;
    padding: 10px 0;
    &__inner {
      @include Container() {
        text-align: center;
        line-height: 1;
        font-size: FontSize(32);
      }
    }
  }
</style>