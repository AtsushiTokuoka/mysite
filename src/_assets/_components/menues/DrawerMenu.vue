<template>
  <div :class="['DrawerMenu',{ open: isOpen }]">
    <p>DrawerMenu</p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'DrawerMenu',
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
});
</script>

<style lang="scss" scoped>
  $self: '.DrawerMenu';
  #{$self} {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: $colorBaseLight;
    color: $colorBaseDark;
    &.open {
      transform: translateX(-100%);
    }
  }
</style>