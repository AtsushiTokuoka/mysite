<template>
  <div :class="['DrawerMenu', { open: isOpen }]">
    <div class="DrawerMenu__inner">
      <ul class="DrawerMenu__links">
        <li
          v-for="page in pages"
          :key="page.meta.title"
          class="DrawerMenu__link"
        >
          <a :href="page.path">
            {{ page.meta.title }}
          </a>
        </li>
      </ul>
    </div>
    <Close
      appearance="dark"
      class="DrawerMenu__close"
      @[touchOrClick]="closeMenu"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import Close from "@/_components/icons/Close.vue";

export default defineComponent({
  name: "VDrawerMenu",
  components: {
    Close,
  },
  setup() {
    const store = useStore();
    const isOpen = computed(() => store.state.menuOpen);

    const touchOrClick = computed(() => store.getters.touchOrClick);
    const closeMenu = () => store.dispatch("toggleMenuOpen");

    const pages = computed(() => store.state.eleventyGlobalData.pages);

    return {
      isOpen,
      pages,
      touchOrClick,
      closeMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
$self: ".DrawerMenu";
#{$self} {
  position: relative;
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
  &__close {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
}
</style>
