<script setup lang="ts">
type BtnProps = {
  mode?: "button" | "link" | "submit";
  appearance?: "main" | "dark" | "light";
  to?: string;
  class?: string;
};

const props = withDefaults(defineProps<BtnProps>(), {
  mode: "button",
  appearance: "main",
  to: "#",
  class: "",
});
</script>

<template>
  <button
    v-if="props.mode === 'button'"
    :class="['Btn', props.appearance, props.class]"
  >
    <slot></slot>
  </button>
  <a
    v-else-if="props.mode === 'link'"
    :class="['Btn', props.appearance, props.class]"
    :href="props.to"
  >
    <slot></slot>
  </a>
  <button
    v-else-if="props.mode === 'submit'"
    :class="['Btn', props.appearance, props.class]"
    type="submit"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@use "@/styles/variables" as variables;
@use "@/styles/utility" as utility;
$self: ".Btn";
#{$self} {
  display: block;
  width: 100%;
  padding: 10px 20px;
  text-align: center;
  font-weight: bold;
  font-size: utility.FontSize(20);
  border-radius: 5px;
  background-color: variables.$colorMain;
  color: variables.$colorBaseLight;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: variables.$colorBaseLight;
    color: variables.$colorMain;
    text-decoration: none;
  }
  &.dark {
    background-color: variables.$colorDark;
    color: variables.$colorBaseLight;
    &:hover {
      background-color: variables.$colorBaseLight;
      color: variables.$colorDark;
    }
  }
  &.light {
    background-color: variables.$colorLight;
    color: variables.$colorBaseLight;
    &:hover {
      background-color: variables.$colorBaseLight;
      color: variables.$colorLight;
    }
  }
}
</style>
