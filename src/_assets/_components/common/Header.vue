<template>
  <header>
    <div class="Container">
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

</style>
