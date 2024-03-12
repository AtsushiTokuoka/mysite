<template>
  <header class="Header">
    <div class="Header__inner">
      <h1 class="Header__logo">{{ message }}</h1>
    </div>
  </header>
</template>

<docs>
  ```vue
  <Header />
  ```
</docs>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Header',
  setup() {
    const message = 'Header.vue';
    return { message };
  },
})
</script>

<style lang="scss" scoped>
  .Header {
    background-color: $colorBaseLight;
    color: $colorBaseDark;
    padding: 10px 0;
    &__inner {
      @include Container() {
        text-align: center;
      }
    }
    &__logo {
      display: inline-block;
      line-height: 1;
    }
  }
</style>
