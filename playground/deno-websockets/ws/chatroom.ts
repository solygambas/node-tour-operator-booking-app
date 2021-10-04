import { v4 } from "https://deno.land/std@0.106.0/uuid/mod.ts";

let sockets = new Map<string, WebSocket>();

interface BroadcastMessage {
  name: string;
  message: string;
}

const broadcastEvent = (message: BroadcastMessage) => {
  sockets.forEach((socket: WebSocket) => {
    socket.send(JSON.stringify(message));
  });
};

const chatConnection = (socket: WebSocket) => {
  const uid = v4.generate();
  sockets.set(uid, socket);
  socket.onopen = () => {
    console.log("WebSocket has been opened with ID", uid);
  };
  socket.onmessage = (e) => {
    const evObject = JSON.parse(e.data);
    broadcastEvent(evObject);
  };
  socket.onclose = () => {
    sockets.delete(uid);
    console.log("WebSocket has been closed.");
  };
  socket.onerror = (e) => console.error("WebSocket error:", e);
};

export { chatConnection };
