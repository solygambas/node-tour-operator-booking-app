// console.log("Hello via Bun!");

const server = Bun.serve({
  port: process.env.PORT,
  fetch(req) {
    return new Response("Hello World");
  },
});

console.log(`Listening on port ${server.port}`);
