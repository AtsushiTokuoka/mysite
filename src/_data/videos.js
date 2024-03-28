let fetch;
async function loadFetch() {
  if (!fetch) {
    fetch = (await import("node-fetch")).default;
  }
}

module.exports = async function () {
  await loadFetch();
  // const videoDataResponse = await fetch(
  //   "https://jsonplaceholder.typicode.com/posts", {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   }
  // );
  // const videos = await videoDataResponse.json();
  const videos = [
    {
      id: "001",
      title: "トーストを焼く動画",
      path: "/assets/video/sample01.mp4",
      description: "トーストを焼く動画",
    },
    {
      id: "002",
      title: "阪急電車",
      path: "/assets/video/sample02.mp4",
      description: "阪急電車",
    },
  ];
  return videos;
};
