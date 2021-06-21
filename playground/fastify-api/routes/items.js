const items = require("../Items");

const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

// Options for get all items
const getItemsOptions = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: function (req, reply) {
    reply.send(items);
  },
};

const getItemOptions = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: function (req, reply) {
    const { id } = req.params;
    const item = items.find((item) => id === item.id);
    reply.send(item);
  },
};

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get("/items", getItemsOptions);

  // Get single items
  fastify.get("/items/:id", getItemOptions);

  done();
}

module.exports = itemRoutes;
