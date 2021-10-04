import { v4 } from "https://deno.land/std@0.106.0/uuid/mod.ts";

let sockets = new Map<string, WebSocket>();

const chatConnection = async (socket: WebSocket) => {
  console.log("new socket connection");
  const uid = v4.generate();
  sockets.set(uid, socket);
  console.log(sockets);
};

export { chatConnection };
