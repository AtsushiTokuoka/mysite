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

<script lang="ts">
import { defineComponent } from "vue";

type Mode = "button" | "link" | "submit";
type Appearance = "main" | "dark" | "light";

export default defineComponent({
  name: "VBtn",
  props: {
    mode: {
      type: String as () => Mode,
      default: "button",
      validator: (value: Mode) => ["button", "link", "submit"].includes(value),
    },
    path: {
      type: String,
      default: "#",
    },
    appearance: {
      type: String as () => Appearance,
      default: "main",
      validator: (value: string) => ["main", "dark", "light"].includes(value),
    },
    hoge: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    return {
      action: props.mode,
      color: props.appearance,
      to: props.path,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "./_Btn.scss";
</style>
