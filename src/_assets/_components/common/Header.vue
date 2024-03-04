<template>
  <header>
    <div class="Container">
      <p>{{ message }}</p>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Footer',
  data() {
    return {
      message: 'Header.vue',
    }
  }
})
</script>

<style lang="scss" scoped>
  @use '../../_style/_layout.scss' as *;
  .Header {
    &__inner {
      @include Container() {}
    }
  }
</style>
