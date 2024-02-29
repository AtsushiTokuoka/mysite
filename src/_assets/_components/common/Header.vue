<template>
  <header class="Header">
    <div class="Header__inner">
      <h1>{{ message }}</h1>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Header',
  data() {
    return {
      message: 'Header.vue',
    }
  }
})
</script>

<style lang="scss" scoped>
  @use '../../_style/_utility.scss' as *;
  .Header {
    &__inner {
      @extend .Container;
    }
  }
</style>
