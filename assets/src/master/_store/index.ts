import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import {
  ModalId,
  ResourceKeys,
  ResourceModels,
  ResourceGuard,
  Request,
  Response,
} from "@/master/_types/index";

// ストアのステートに対して型を定義します
export interface State {
  currentUserId: number;
  currentResourceName: ResourceKeys;
  resources: ResourceModels;
  modalId: ModalId;
}

// インジェクションキーを定義します
export const key: InjectionKey<Store<State>> = Symbol();

const state: State = {
  currentUserId: 1,
  currentResourceName: "users",
  resources: {
    users: [],
    videos: [],
    photos: [],
    articles: [],
  },
  modalId: "",
};

export const store = createStore<State>({
  state,
  getters: {},
  mutations: {
    updateModalId(state, modalId: ModalId) {
      state.modalId = modalId;
    },
    setCurrentResourceName(state, resourceKey: ResourceKeys) {
      state.currentResourceName = resourceKey;
    },
    setResources(
      state,
      { resourceKey, payload }: { resourceKey: ResourceKeys; payload: [] }
    ) {
      state.resources[resourceKey] = payload;
    },
  },
  actions: {
    async fetchResource({ commit }, req: Request) {
      const { resourceKey, body } = req;

      try {
        // リクエストを送信
        let res;
        if (req.method === "GET") {
          const params = new URLSearchParams(
            req.body as Record<string, string>
          ).toString();

          const queryText = params ? `?${params}` : "";
          res = await fetch(`/master/api/${resourceKey}${queryText}`, {
            headers: req.headers,
          });
        } else {
          res = await fetch(`/master/api/${resourceKey}`, {
            method: req.method,
            headers: req.headers,
            body: JSON.stringify(body),
          });
        }
        let result = await res.json();

        // レスポンスをランタイムで検証
        const guard = ResourceGuard(resourceKey);
        if (!guard(result)) {
          result = [];
          throw new Error(`${resourceKey}: APIからのresponseの型が不正です`);
        }

        const payload: Response<typeof resourceKey> = result;
        commit("setResources", { resourceKey, payload });
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
