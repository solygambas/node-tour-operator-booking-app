// console.log("Hello via Bun!");

const server = Bun.serve({
  port: process.env.PORT,
  fetch(req) {
    // return new Response("Hello World");
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("HomePage!");
    if (url.pathname === "/blog") return new Response("Blog!");
    return new Response("404!");
  },
});

console.log(`Listening on port ${server.port}`);
