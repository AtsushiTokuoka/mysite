<template>
  <button class="PageTop" @[touchOrClick] = "onClick">TOP</button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'PageTop',
  setup() {

    const store = useStore();

    const touchOrClick = computed(() => store.getters.touchOrClick);

    const onClick = () => {      
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    return {
      onClick,
      touchOrClick
    }
  }
})
</script>

<style lang="scss" scoped>
  $self: '.PageTop';
  #{$self} {
    color: $colorBaseDark;
  }
</style>