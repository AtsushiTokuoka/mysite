<script setup lang="ts">
type Mode = "button" | "link" | "submit";
type Appearance = "main" | "dark" | "light";

const props = withDefaults(
  defineProps<{
    mode: Mode;
    appearance: Appearance;
    path: string;
  }>(),
  {
    mode: "button",
    appearance: "main",
  }
);

const mode: Mode = props.mode;
const color: Appearance = props.appearance;
const to: string = "#";
</script>

<template>
  <button v-if="mode === 'button'" :class="['Btn', color]">
    <slot />
  </button>
  <a v-else-if="mode === 'link'" :class="['Btn', color]" :href="to">
    <slot />
  </a>
  <button v-else-if="mode === 'submit'" :class="['Btn', color]" type="submit">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@use "./_Btn.scss";
</style>
