const { inMemory: inMemoryDB } = require("../../database");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  add: async (order) => {
    if (!order.id) {
      order.id = uuidv4();
    }
    inMemoryDB.orders.push(order);
    return order;
  },
  update: async (order) => {
    const index = inMemoryDB.orders.findIndex((i) => i.id === order.id);
    if (index >= 0) {
      inMemoryDB.orders[index] = order;
      return inMemoryDB.orders[index];
    }

    return null;
  },
  delete: async (order) => {
    const index = inMemoryDB.orders.findIndex((i) => i.id === order.id);

    if (index >= 0) {
      inMemoryDB.orders.splice(index, 1);
      return order;
    }

    return null;
  },
  getById: async (id) => {
    return inMemoryDB.orders.find((i) => i.id === id);
  },
};
