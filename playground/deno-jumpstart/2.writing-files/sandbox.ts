// reading files
// --allow-read
// ref: https://deno.land/manual/getting_started/permissions

// const decoder = new TextDecoder("utf-8");

// // top level await
// const data = await Deno.readFile(
//   "./playground/deno-jumpstart/2.writing-files/readme.txt"
// );
// console.log(decoder.decode(data));

const data = await Deno.readTextFile(
  "./playground/deno-jumpstart/2.writing-files/readme.txt"
);
console.log(data);

// writing files
// --allow-write

const encoder = new TextEncoder();
const text = encoder.encode("hello again, ninjas");

await Deno.writeFile(
  "./playground/deno-jumpstart/2.writing-files/readme2.txt",
  text
);

// renaming and removing files

await Deno.rename(
  "./playground/deno-jumpstart/2.writing-files/readme2.txt",
  "./playground/deno-jumpstart/2.writing-files/deleteme.txt"
);

await Deno.remove("./playground/deno-jumpstart/2.writing-files/deleteme.txt");
