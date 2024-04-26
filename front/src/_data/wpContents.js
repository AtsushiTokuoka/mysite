// let fetch;
// async function loadFetch() {
//   if (!fetch) {
//     fetch = (await import("node-fetch")).default;
//   }
// }

// module.exports = async function () {
//   await loadFetch();
//   const cmsData = await fetch("http://cms/wp-json/wp/v2/posts?_embed", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const result = await cmsData.json();
//   return result;
// };
