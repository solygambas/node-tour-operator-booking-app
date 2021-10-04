import { v4 } from "https://deno.land/std@0.106.0/uuid/mod.ts";

let sockets = new Map<string, WebSocket>();

const chatConnection = async (socket: WebSocket) => {
  console.log("new socket connection");
};

export { chatConnection };
