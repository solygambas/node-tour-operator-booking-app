// for reference: https://medium.com/deno-the-complete-reference/native-http-server-denos-equivalent-of-node-js-f268cea78107
import { readableStreamFromReader as toStream } from "https://deno.land/std/io/mod.ts";

const server = Deno.listen({ port: 3000 });
console.log("listening on http://localhost:3000/");

for await (const conn of server) {
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
  for await (const { request: req, respondWith: res } of Deno.serveHttp(conn)) {
    if (req.url === "http://localhost:3000/") {
      const fileName = "./playground/deno-websockets/public/index.html";
      const fileSize = (await Deno.stat(fileName)).size.toString();
      return res(
        new Response(toStream(await Deno.open(fileName)), {
          headers: {
            "content-type": "text/html",
            "content-length": fileSize,
          },
        })
      );
    }
  }
}
