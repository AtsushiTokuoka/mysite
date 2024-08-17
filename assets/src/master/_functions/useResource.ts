import { computed } from "vue";
import { useStore } from "@/master/_store/index";
import { ResourceTypes } from "@/master/_types/index";

export function useResource() {
  const store = useStore();

  const resourceData = computed(() => store.state.resourceData);

  const getResource = async (resourceType: ResourceTypes, body?: object) => {
    const request = {
      endpoint: resourceType,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };
    await store.dispatch("fetchResource", request);
  };

  return {
    resourceData,
    getResource,
  };
}
