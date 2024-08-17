<template>
  <div class="form-check form-switch Switch">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      :id="uniqueId"
      v-model="checked"
    />
    <label class="form-check-label" :for="uniqueId">
      {{ checked ? active : inactive }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { generateUniqueComponentId } from "@/master/_functions/generateUniqueComponentId";

const props = defineProps<{
  isChecked: boolean;
  active: string;
  inactive: string;
}>();

const checked = ref(props.isChecked);
const uniqueId = generateUniqueComponentId();
</script>

<style lang="scss" scoped>
.form-check-input {
  width: 50px;
  height: 20px;
  margin-top: 2px;
}
.form-check-label {
  padding-left: 5px;
}
</style>
