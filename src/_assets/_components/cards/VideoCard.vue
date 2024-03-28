<template>
  <div class="VideoCard">
    <a :href="'/video/' + video.id + '/'" class="VideoCard__link">
      <div class="VideoCard__thumbnail">
        <video controls :src="video.path" autoplay loop />
      </div>
      <h3 class="VideoCard__title">{{ video.title }}</h3>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "VideoCard",
  props: {
    id: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const video = {
      id: props.id,
      title: props.title,
      path: props.path,
    };
    return {
      video,
    };
  },
});
</script>

<style lang="scss" scoped>
.VideoCard {
  &__link {
    &:hover {
      opacity: 0.7;
      text-decoration: none;
    }
  }
  &__thumbnail {
    position: relative;
    padding-bottom: 56.25%;
    video {
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
