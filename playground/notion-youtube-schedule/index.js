const getVideos = require("./services/notion");

(async () => {
  const notionVideos = await getVideos();
  console.log(notionVideos);
})();
