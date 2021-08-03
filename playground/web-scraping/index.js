const puppeteer = require("puppeteer");
const fs = require("fs/promises");
const cron = require("node-cron");

async function start() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://learnwebcode.github.io/practice-requests/");

  // await page.screenshot({ path: "screenshot.png", fullPage: true });

  // const names = await page.evaluate(() => {
  //   return Array.from(document.querySelectorAll(".info strong")).map(
  //     (name) => name.textContent
  //   );
  // });
  // await fs.writeFile("names.txt", names.join("\r\n"));

  // await page.click("#clickme");
  // const clickedData = await page.$eval(
  //   "#data",
  //   (element) => element.textContent
  // );
  // console.log(clickedData);

  // const photos = await page.$$eval("img", (images) => {
  //   return images.map((image) => image.src);
  // });

  await page.type("#ourfield", "blue");
  await Promise.all([page.click("#ourform button"), page.waitForNavigation()]);
  const info = await page.$eval("#message", (element) => element.textContent);
  console.log(info);

  // for (const photo of photos) {
  //   const imagePage = await page.goto(photo);
  //   await fs.writeFile(photo.split("/").pop(), await imagePage.buffer());
  // }

  await browser.close();
}

start();

// schedule task
// setInterval(start, 5000);

// with cron
// cron.schedule("*/5 * * * * *", start);

// on a linux server, search for cron jobs
