const items = require("../Items");

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get("/items", (req, reply) => {
    reply.send(items);
  });

  // Get single items
  fastify.get("/items/:id", (req, reply) => {
    const { id } = req.params;
    const item = items.find((item) => id === item.id);
    reply.send(item);
  });

  done();
}

module.exports = itemRoutes;
