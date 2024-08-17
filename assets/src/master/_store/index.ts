import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import { ModalId, ResourceTypes, ResourceModels } from "@/master/_types/index";

// ストアのステートに対して型を定義します
export interface State {
  currentUserId: number;
  currentResourceType: ResourceTypes;
  resourceData: ResourceModels;
  modalId: ModalId;
}

// インジェクションキーを定義します
export const key: InjectionKey<Store<State>> = Symbol();

const state: State = {
  currentUserId: 0,
  currentResourceType: "users",
  resourceData: {
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
    setCurrentResourceType(state, resourceType: ResourceTypes) {
      state.currentResourceType = resourceType;
    },
    setResourceData(
      state,
      { resourceType, payload }: { resourceType: ResourceTypes; payload: [] }
    ) {
      state.resourceData[resourceType] = payload;
    },
  },
  actions: {
    async fetchResource({ commit }, req) {
      try {
        const resourceType = req.endpoint;
        let responce;
        if (req.method === "GET") {
          const paramString = new URLSearchParams(req.body).toString();
          const body = paramString ? `?${paramString}` : "";
          responce = await fetch(`/master/api/${req.endpoint}${body}`, {
            headers: req.headers,
          });
        } else {
          responce = await fetch(`/master/api/${req.endpoint}`, {
            method: req.method,
            headers: req.headers,
            body: JSON.stringify(req.body),
          });
        }

        // const res = await responce.json();
        // console.log(res);

        const payload = [
          { id: 1, name: "Alice", password: "password" },
          { id: 2, name: "Bob", password: "password 2" },
        ];

        commit("setResourceData", { resourceType, payload });
      } catch (error) {
        console.error("Error fetching resource:", error);
      }
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
