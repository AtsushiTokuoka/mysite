<template>
  <header>
    <div class="Container">
      <p>{{ message }}</p>
    </div>
  </header>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'Header',
  setup() {
    const message = ref('Header.vue');
    return { message };
  },
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
