<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const navi = document.querySelector(".Navi");
  navi?.addEventListener("click", (e) => {
    console.log("click");
  });
});
</script>

<template>
  <ul class="Navi">
    <li>hoge</li>
    <li>hoge</li>
    <li>hoge</li>
  </ul>
</template>

<style lang="scss" scoped>
.Navi {
  color: red;
}
</style>
