<template>
  <footer>
    <div class="Container">
      <p>{{ message }}</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Footer',
  data() {
    return {
      message: 'Footer.vue',
    }
  }
})
</script>

<style lang="scss" scoped>

</style>