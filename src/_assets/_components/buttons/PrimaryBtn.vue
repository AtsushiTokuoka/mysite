<template>
  <button v-if="type === 'button'" :class="['PrimaryBtn', color]" @click="onClick">
    <slot></slot>
  </button>
  <a v-else-if="type === 'link'" :class="['PrimaryBtn', color]" :href="url">
    <slot></slot>
  </a>
  <button v-else-if="type === 'submit'"  :class="['PrimaryBtn', color]" type="submit">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PrimaryBtn',
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
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
});
</script>

<style lang="scss" scoped>
  $self: '.PrimaryBtn';
  #{$self} {
    display: block;
    width: 100%;
    padding: 10px 20px;
    text-align: center;
    font-weight: bold;
    font-size: FontSize(20);
    border-radius: 5px;
    background-color: $colorMain;
    color: $colorBaseLight;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: $colorBaseLight;
      color: $colorMain;
    }
    &.dark {
      background-color: $colorDark;
      color: $colorBaseLight;
      &:hover {
        background-color: $colorBaseLight;
        color: $colorDark;
      }
    }
    &.light {
      background-color: $colorLight;
      color: $colorBaseLight;
      &:hover {
        background-color: $colorBaseLight;
        color: $colorLight;
      }
    }
  }
</style>