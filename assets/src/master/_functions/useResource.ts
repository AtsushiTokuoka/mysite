import { computed } from "vue";
import { useStore } from "@/master/_store/index";
import { ResourceKeys, Request } from "@/master/_types/index";

// GETリクエストの場合はbodyを省略可能にする
type Params<M extends Request["method"]> = M extends "GET"
  ?
      | { method: M; path: string; body?: never }
      | { method: M; path?: never; body: object }
  : { method: M; path?: string; body: object };

export function useResource() {
  const store = useStore();

  const resources = computed(() => store.state.resources);

  const fetchResource = async (
    resourceKey: ResourceKeys,
    params: Params<Request["method"]>
  ) => {
    const { method, path, body } = params;
    const request: Request = {
      resourceKey,
      method,
      headers: {
        "Content-Type": "application/json",
      },
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
