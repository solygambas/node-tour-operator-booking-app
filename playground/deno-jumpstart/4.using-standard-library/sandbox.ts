// standard library: https://deno.land/std

// uuid module
// import { v4 } from "https://deno.land/std@0.106.0/uuid/mod.ts";

// const uid = v4.generate();
// console.log(uid);

// fs module no longer needed: readJson and writeJson support were deleted from std library

// const jsonObj = JSON.parse(
//   await Deno.readTextFile(
//     "./playground/deno-jumpstart/4.using-standard-library/ninjas.json"
//   )
// );

// console.log(jsonObj);

// const books = [
//   { title: "the way of kings", author: "brandon sanderson" },
//   { title: "name of the wind", author: "patrick rothfuss" },
// ];

// await Deno.writeTextFile(
//   "./playground/deno-jumpstart/4.using-standard-library/books.json",
//   JSON.stringify(books, null, 2)
//   // 2 for spaces, https://thecodebarbarian.com/the-80-20-guide-to-json-stringify-in-javascript
// );

// console.log("created books.json");

// http module (server)
// https://deno.land/std@0.109.0/http
// oak is like express: https://github.com/oakserver/oak

import { listenAndServe } from "https://deno.land/std@0.109.0/http/server.ts";

listenAndServe(":3000", () => new Response("Hello ninjas\n"));

console.log("listening for requests on http://localhost:3000/");
