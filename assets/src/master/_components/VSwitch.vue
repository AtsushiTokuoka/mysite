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

<script lang="ts">
import { defineComponent, ref } from "vue";
import { generateUniqueComponentId } from "@/master/_functions/generateUniqueComponentId";
export default defineComponent({
  name: "VSwitch",
  props: {
    isChecked: {
      type: Boolean,
      required: true,
    },
    active: {
      type: String,
      required: true,
    },
    inactive: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const checked = ref(props.isChecked);
    const uniqueId = generateUniqueComponentId();
    return {
      checked,
      uniqueId,
    };
  },
});
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
