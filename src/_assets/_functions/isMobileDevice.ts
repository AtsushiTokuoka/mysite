/**
 * モバイルデバイスかどうかを判定する関数です。
 * @returns {boolean} モバイルデバイスの場合はtrue、それ以外の場合はfalseを返します。
 */
export default function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
