<template>
  <div :class="['DrawerMenu', { open: isOpen }]">
    <div class="DrawerMenu__inner">
      <p>DrawerMenu</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "VDrawerMenu",
  setup() {
    const store = useStore();
    const isOpen = computed(() => store.state.menuOpen);
    return {
      isOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
$self: ".DrawerMenu";
#{$self} {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: $colorBaseLight;
  color: $colorBaseDark;
  transition: transform 0.05s ease-in-out;
  &.open {
    transform: translateX(-100%);
  }
  &__inner {
    @include Container() {
    }
  }
  p {
    text-align: center;
    font-size: FontSize(32);
    font-weight: bold;
    padding: 20px 0;
  }
}
</style>
