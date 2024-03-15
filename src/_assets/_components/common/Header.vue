<template>
  <header class="Header" ref="Header">
    <div class="Header__inner">
      <h1 class="Header__logo">{{ message }}</h1>
    </div>
  </header>
</template>

<docs>
  ```vue
  <Header />
  ```
</docs>

<script lang="ts">
import { defineComponent, ref , onMounted } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'Header',
  setup() {
    
    const message = 'Header.vue';
    const store = useStore();

    const Header = ref<HTMLElement | null>(null);
    const setHeaderHeight = () => {
      store.dispatch('setHeaderHeight', { height: Header.value?.offsetHeight });
    };

    onMounted(() => {
      setHeaderHeight();
    });
    return { 
      message,
      Header,
      setHeaderHeight,
    };
  },
})
</script>

<style lang="scss" scoped>
  .Header {
    background-color: $colorBaseLight;
    color: $colorBaseDark;
    padding: 10px 0;
    &__inner {
      @include Container() {
        text-align: center;
      }
    }
    &__logo {
      display: inline-block;
      line-height: 1;
    }
  }
</style>
