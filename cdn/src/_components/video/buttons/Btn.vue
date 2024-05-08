<template>
  <button v-if="mode === 'button'" class="Btn" :class="{ active: isActive }">
    <slot />
  </button>
  <a
    v-else-if="mode === 'link'"
    :href="to"
    class="Btn"
    :class="{ active: isActive }"
  >
    <slot />
  </a>
  <button
    v-else-if="mode === 'submit'"
    type="submit"
    class="Btn"
    :class="{ active: isActive }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VBtn",
  props: {
    mode: {
      type: String,
      default: "button",
      validator: (value: string) =>
        ["button", "link", "submit"].includes(value),
    },
    path: {
      type: String,
      default: "#",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return {
      action: props.mode,
      to: props.path,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "./_Btn.scss";
</style>
