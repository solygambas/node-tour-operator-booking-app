// for reference: https://medium.com/deno-the-complete-reference/native-http-server-denos-equivalent-of-node-js-f268cea78107
import { readableStreamFromReader as toStream } from "https://deno.land/std/io/mod.ts";
import { chatConnection } from "./ws/chatroom.ts";

const server = Deno.listen({ port: 3000 });
console.log("listening on http://localhost:3000/");

for await (const conn of server) {
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
  for await (const { request: req, respondWith: res } of Deno.serveHttp(conn)) {
    // console.log(req);
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
    if (req.headers.get("upgrade") === "websocket") {
      const { socket, response } = Deno.upgradeWebSocket(req);
      chatConnection(socket);
      // console.log(socket);
      // console.log("new socket connection");
      // socket.onopen = () => console.log("socket opened");
      // socket.onmessage = (e) => {
      //   console.log("socket message:", e.data);
      //   socket.send(new Date().toString());
      // };
      // socket.onerror = (e) => console.log("socket errored:", e.message);
      // socket.onclose = () => console.log("socket closed");
      return response;
    }
  }
}
