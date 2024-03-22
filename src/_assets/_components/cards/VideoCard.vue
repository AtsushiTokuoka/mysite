<template>
  <div class="VideoCard">
    <a href="#" class="VideoCard__link">
      <div class="VideoCard__thumbnail">
        <img src="https://picsum.photos/seed/picsum/1280/720" alt="thumbnail">
      </div>
      <h3 class="VideoCard__title">video title</h3>
    </a>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue';
// import { useStore } from 'vuex';
export default defineComponent({
  name: 'VideoCard',
  setup() {
    // const store = useStore();
    return {
      
    };
  },
});
</script>

<style lang="scss" scoped>
  .VideoCard {
    &__link {

    }
  }
</style>