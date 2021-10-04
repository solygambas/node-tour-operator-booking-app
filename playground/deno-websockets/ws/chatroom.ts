import { v4 } from "https://deno.land/std@0.106.0/uuid/mod.ts";

let sockets = new Map<string, WebSocket>();

const chatConnection = (socket: WebSocket) => {
  const uid = v4.generate();
  sockets.set(uid, socket);
  socket.onopen = () => {
    console.log("connection opened");
  };
  socket.onmessage = (e) => {
    console.log(e.data);
    socket.close();
  };
};

export { chatConnection };
