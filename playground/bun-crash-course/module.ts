// import path from "path";
const path = require("path");

const filepath = path.join("foo", "bar", "image.png");
const filename = path.basename(filepath);
console.log(filename);
