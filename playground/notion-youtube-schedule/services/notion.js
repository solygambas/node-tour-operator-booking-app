const dotenv = require("dotenv").config();
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

// const listDatabases = async () => {
//   const res = await notion.databases.list();
//   console.log(res);
// };
// listDatabases();

module.exports = async function getVideos() {
  const payload = {
    path: `databases/${databaseId}/query`,
    method: "POST",
  };
  const { results } = await notion.request(payload);
  const videos = results.map((page) => {
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.Date.date.start,
      description: page.properties.Description.rich_text[0].text.content,
      tags: page.properties.Tags.rich_text[0].text.content,
    };
  });
  return videos;
};
