<template>
  <div class="VideoCard">
    <a :href="'/video/' + video.vid + '/'" class="VideoCard__link">
      <div class="VideoCard__thumbnail">
        <img :src="video.thumbnail" alt="" />
        <video :src="video.path" autoplay loop class="is-play" />
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
    vid: {
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
    thumbnail: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const video = {
      vid: props.vid,
      title: props.title,
      path: props.path,
      thumbnail: props.thumbnail,
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
    img,
    video {
      border-radius: 10px;
      position: absolute;
      height: 100%;
      object-fit: cover;
      @include mq(sp) {
        border-radius: 0;
      }
    }
    video {
      opacity: 0;
      &.is-play {
        opacity: 1;
      }
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
