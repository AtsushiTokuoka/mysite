<template>
  <div class="VideoCard">
    <a href="#" class="VideoCard__link">
      <div class="VideoCard__thumbnail">
        <img
          src="https://picsum.photos/seed/picsum/1280/1280"
          alt="thumbnail"
        />
      </div>
      <h3 class="VideoCard__title">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam vero est
        voluptatem
      </h3>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { useStore } from 'vuex';
export default defineComponent({
  name: "VideoCard",
  setup() {
    // const store = useStore();
    return {};
  },
});
</script>

<style lang="scss" scoped>
.VideoCard {
  &__link {
  }
  &__thumbnail {
    position: relative;
    padding-bottom: 56.25%;
    img {
      border-radius: 10px;
      position: absolute;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    color: $colorBaseLight;
    font-size: FontSize(18);
  }
}
</style>
