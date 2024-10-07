<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useStore } from "@/client/_store/index";

const store = useStore();

// vuexよりtouchOrClickを取得
const touchOrClick = computed(() => store.getters.touchOrClick);

// vuexのmenuOpenをtoggle
const toggleMenuOpen = () => store.dispatch("toggleMenuOpen");

const Footer = ref<HTMLElement>();

const setFooterHeight = () => {
  store.dispatch("setFooterHeight", { height: Footer.value?.offsetHeight });
};

let resizeObserver: ResizeObserver | null = null;
onMounted(() => {
  resizeObserver = new ResizeObserver(() => setFooterHeight());
  resizeObserver.observe(Footer.value!);
});
onUnmounted(() => {
  if (resizeObserver && Footer.value) {
    resizeObserver.unobserve(Footer.value);
  }
});
</script>

<template>
  <ul ref="Footer" class="Footer" role="tablist">
    <li class="Footer__item" role="tab">
      <a href="/video">
        <span class="Footer__icon">
          <svg
            id="_x32_"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <path
                class="st0"
                d="M451.679,161.238h-0.015L296.946,16.2C285.488,5.434,270.647-0.023,255.992,0
      c-14.654-0.023-29.496,5.434-40.969,16.2L60.321,161.238c-12.078,11.317-18.924,27.144-18.924,43.694v247.174
      c-0.016,16.463,6.737,31.584,17.542,42.351c10.758,10.805,25.88,17.55,42.351,17.542h309.42
      c16.456,0.008,31.576-6.737,42.351-17.542c10.789-10.758,17.558-25.888,17.542-42.351V204.932
      C470.603,188.368,463.741,172.556,451.679,161.238z M422.912,452.107c-0.015,3.446-1.335,6.341-3.586,8.623
      c-2.282,2.251-5.185,3.571-8.615,3.578H308.993v-105.97H203.007v105.97H101.29c-3.446-0.015-6.349-1.327-8.631-3.57
      c-2.251-2.282-3.571-5.186-3.571-8.631V204.932c0-3.384,1.382-6.59,3.85-8.896L247.655,50.991c2.391-2.236,5.278-3.284,8.336-3.299
      c3.059,0.016,5.947,1.064,8.337,3.291l154.718,145.038v0.008c2.468,2.313,3.865,5.534,3.865,8.903V452.107z"
              />
            </g>
          </svg>
        </span>
        <span class="Footer__text">ホーム</span>
      </a>
    </li>
    <li class="Footer__item" role="tab">
      <a href="/video/short/">
        <span class="Footer__icon">
          <svg
            id="_x32_"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <path
                class="st0"
                d="M412.42,174.719l39.922,57.688h-45.156l-39.922-57.688h-57.109l39.938,57.688h-45.156l-39.922-57.688h-57.109
		l39.922,57.688h-45.141l-39.922-57.688h-57.109l39.922,57.688H100.42l-38.469-55.578L459.779,65.844l-4.484-16.047l-0.953-3.438
		l-6.203-22.203c-3.953-14.188-16.547-23.5-30.5-24.156l-21.656,62.641l-43.5,12.141l22.406-64.75l-55,15.344l-22.406,64.75
		l-43.484,12.125l22.406-64.75l-55.016,15.344l-22.406,64.766l-43.484,12.125L177.904,65l-55.016,15.344l-22.391,64.75l-43.5,12.125
		l22.406-64.75l-18.516,5.172c-17.703,4.938-28.063,23.297-23.125,41.016l6.203,22.188l-1.297,0.375l5.438,19.469l1.328-0.375
		v52.094v2.219v244.094c0,18.375,14.906,33.281,33.281,33.281h359.469c18.391,0,33.281-14.906,33.281-33.281V234.625v-2.219v-57.688
		H412.42z"
              />
            </g>
          </svg>
        </span>
        <span class="Footer__text">ショート</span>
      </a>
    </li>
    <li class="Footer__item" role="tab">
      <a href="/video/list">
        <span class="Footer__icon">
          <svg
            id="_x32_"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <path
                class="st0"
                d="M503.654,101.298h-43.289V58c0-4.61-3.727-8.338-8.329-8.338h-16.833c-4.602,0-8.347,3.728-8.347,8.338v43.298
		h-43.289c-4.602,0-8.329,3.727-8.329,8.329v16.833c0,4.602,3.727,8.346,8.329,8.346h43.289v43.29c0,4.601,3.745,8.337,8.347,8.337
		h16.833c4.602,0,8.329-3.736,8.329-8.337v-43.29h43.289c4.619,0,8.346-3.744,8.346-8.346v-16.833
		C512,105.026,508.273,101.298,503.654,101.298z"
              />
              <path
                class="st0"
                d="M500.836,239.74l-0.21-0.428l-0.28-0.394c-8.556-12.616-22.817-20.367-38.216-20.367H382.22l-12.633-36.115
		l-0.385,0.096c-8.836-19.204-27.839-32.178-49.519-32.178H144.986c-1.994-0.026-4.041-1.129-5.231-3.666l0.017,0.035
		c-8.592-18.889-27.314-31.329-48.224-31.329H46.474c-0.035,0-0.035-0.009-0.052-0.009c-15.118,0.009-29.134,7.489-37.743,19.702
		l-0.595,0.866l-0.123,0.376C2.748,144.22,0,153.355,0,162.611c0,4.768,0.736,9.571,2.188,14.243H2.17l0.018,0.035l0.017,0.061
		l0.018,0.062v0.017l76.115,247.645v0.035l0.332,1.033c6.912,21.801,27.121,36.587,49.973,36.587l272.719,0.009
		c19.72-0.009,37.48-11.102,46.404-28.268l0.437,0.141l57.516-152.178l0.07-0.201l0.017-0.062l0.018-0.035
		c1.838-5.196,2.73-10.62,2.73-15.992c0-9.098-2.625-18.136-7.717-25.984V239.74z M472.63,270.011l-55.03,145.58l-0.035,0.106
		c-2.432,6.859-8.941,11.443-16.203,11.443l-272.719-0.017c-7.506,0.017-14.156-4.848-16.412-12.004L35.783,166.382l0.017,0.043
		c-0.402-1.251-0.595-2.537-0.595-3.814c0-2.608,0.805-5.162,2.258-7.244l-0.018,0.017c2.223-3.114,5.547-4.786,8.994-4.786h45.11
		c6.754,0,13.106,4.007,16.185,10.735c6.649,14.602,21.12,24.217,37.253,24.217h174.697c8.294,0,15.906,5.486,18.653,14.156
		l0.07,0.21l8.994,25.678H207.733c-20.279,0-38.18,13.019-44.951,32.134l-35.608,102.904l26.596,9.204l35.573-102.781l-0.035,0.122
		c2.974-8.276,10.376-13.42,18.425-13.42h254.399c3.482,0,6.912,1.741,9.1,4.97c1.364,2.029,2.134,4.496,2.117,7.016
		C473.348,267.186,473.103,268.629,472.63,270.011z"
              />
            </g>
          </svg>
        </span>
        <span class="Footer__text">あとで見る</span>
      </a>
    </li>
    <li class="Footer__item" role="tab">
      <a href="#" @[touchOrClick]="toggleMenuOpen">
        <span class="Footer__icon">
          <svg
            id="_x32_"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <rect y="16" class="st0" width="512" height="96" />
              <rect y="208" class="st0" width="512" height="96" />
              <rect y="400" class="st0" width="512" height="96" />
            </g>
          </svg>
        </span>
        <span class="Footer__text">メニュー</span>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.Footer {
  background-color: $videoDarkColor01;
  border-top: 1px solid $videoDarkColor03;
  display: flex;
  justify-content: center;
  &__item {
    width: 25%;
    a {
      display: flex;
      padding: 5px 0;
      flex-direction: column;
      align-items: center;
      color: $videoLightColor;
      &:hover {
        text-decoration: none;
      }
    }
  }
  &__icon {
    width: 23px;
    display: block;
    svg {
      width: 100%;
    }
    path,
    rect {
      fill: $videoLightColor;
    }
  }
  &__text {
    font-size: FontSize(12);
  }
}
</style>
