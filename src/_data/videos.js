let fetch;
async function loadFetch() {
  if (!fetch) {
    fetch = (await import('node-fetch')).default;
  }
}

module.exports = async function() {
  await loadFetch();
  const videoDataResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  const videoData = await videoDataResponse.json();
  return JSON.stringify(videoData);
};