/* ------------------------------------------------------------------
  Modal.vueでnanostoresのmodalIdを監視して、モーダルを表示する仕様のため
  data-modal-idにセットされたidを、nanostoresのmodalIdにセットする
  イベントリスナーを設定する
--------------------------------------------------------------------*/
import { modalId } from "@/store/index.ts";
export default ((): void => {
  const MODAL_TRIGGER_ATTRIBUTE = "data-modal-id";

  document.querySelectorAll(`[${MODAL_TRIGGER_ATTRIBUTE}]`).forEach((trg) => {
    trg.addEventListener("click", (e) => {
      const id = (e.currentTarget as Element).getAttribute(
        MODAL_TRIGGER_ATTRIBUTE
      );
      if (id) modalId.set(id);
    });
  });
})();
