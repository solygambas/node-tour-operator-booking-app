const items = require("../Items");

const getItems = (req, reply) => {
  reply.send(items);
};

const getItem = (req, reply) => {
  const { id } = req.params;
  const item = items.find((item) => id === item.id);
  reply.send(item);
};

module.exports = { getItems, getItem };
