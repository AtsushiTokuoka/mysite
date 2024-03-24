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
  // const videoData = await videoDataResponse.json();
  const videoData = [
    {
      title: "Video Title 1",
      thumbnail: "https://picsum.photos/seed/picsum/1280/720",
      desc: "Video Title 1 hogehoge",
    },
    {
      title: "Video Title 2",
      thumbnail: "https://picsum.photos/seed/picsum/1280/720",
      desc: "Video Title 2 hogehoge",
    },
  ];
  return JSON.stringify(videoData);
};
