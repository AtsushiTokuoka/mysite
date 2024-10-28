<script setup lang="ts">
import { ref, onMounted } from "vue";
const Hoge = ref<HTMLElement>();
onMounted(() => {
  console.log(Hoge.value);
});
</script>

<template>
  <p class="hoge" ref="Hoge">modal01</p>
</template>

<style lang="scss" scoped>
.hoge {
  color: red;
}
</style>
