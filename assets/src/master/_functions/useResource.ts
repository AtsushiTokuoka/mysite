import { computed } from "vue";
import { useStore } from "@/master/_store/index";
import { ResourceKeys, RequestParams, Request } from "@/master/_types/index";

export function useResource() {
  const store = useStore();

  const resources = computed(() => store.state.resources);

  const fetchResource = async (
    resourceKey: ResourceKeys,
    params: RequestParams
  ) => {
    const { method, path, body } = params;

    const request: Request = {
      headers: { "Content-Type": "application/json" },
      resourceKey,
      method,
      path,
      body,
    };
    await store.dispatch("fetchResource", request);
  };

  return {
    resources,
    fetchResource,
  };
}
