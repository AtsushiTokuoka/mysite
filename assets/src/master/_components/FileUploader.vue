<template>
  <div class="FileUploader">
    <div class="FileUploader__input">
      <label :for="uniqueId" class="btn btn-primary">ファイルを選択</label>
      <input type="file" :id="uniqueId" @change="handleInput" />
      <div class="FileUploader__filename">
        <a v-if="isUploaded" :href="uploadedUrl" target="_blank">{{
          uploadedUrl
        }}</a>
        <span v-else>{{ fileName }}</span>
      </div>
    </div>
    <div
      class="FileUploader__progress progress"
      role="progressbar"
      aria-label="Success striped example"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div class="progress-bar progress-bar-striped" style="width: 25%">
        25%
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { generateUniqueComponentId } from "@/master/_functions/generateUniqueComponentId";
export default defineComponent({
  name: "FileUploader",
  setup() {
    const uniqueId = generateUniqueComponentId();
    const fileName = ref("ファイルが選択されていません");
    const isUploaded = ref(false);
    const uploadedUrl = ref("https://developer.vimeo.com/api/guides/start");
    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        fileName.value = file.name;
      }
    };
    return {
      uniqueId,
      fileName,
      isUploaded,
      uploadedUrl,
      handleInput,
    };
  },
});
</script>

<style lang="scss" scoped>
.FileUploader {
  display: flex;
  align-items: center;
  gap: 10px;
  &__input {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 60%;
    input[type="file"] {
      display: none;
    }
  }
  &__filename {
    flex-basis: 70%;
  }
  &__progress {
    width: 40%;
    height: 30px;
  }
}
</style>
