<template>
  <button v-if="type === 'button'" :class="['Btn', color]">
    <slot></slot>
  </button>
  <a v-else-if="type === 'link'" :class="['Btn', color]" :href="url">
    <slot></slot>
  </a>
  <button v-else-if="type === 'submit'"  :class="['Btn', color]" type="submit">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Btn',
  props: {
    type: {
      type: String,
      required: true,
      validator: (value: string) => ['button', 'link', 'submit'].includes(value),
    },
    url: {
      type: String,
      default: '#',
    },
    color: {
      type: String,
      default: 'main',
      validator: (value: string) => ['main', 'dark', 'light'].includes(value),
    }
  },
  setup(props) {
    return {
      type: props.type,
      color: props.color,
      url: props.url,
    };
  },
});
</script>

<style lang="scss" scoped>
  @use "./Btn.scss";
</style>