const { inMemory: inMemoryDB } = require('../../database');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  add: async (user) => {
    if (!user.id) {
      user.id = uuidv4();
    }
    inMemoryDB.users.push(user);
    return user;
  },
  update: async (user) => {
    const index = inMemoryDB.users.findIndex((i) => i.id === user.id);
    if (index >= 0) {
      inMemoryDB.users[index] = user;
      return inMemoryDB.users[index];
    }

    return null;
  },
  delete: async (user) => {
    const index = inMemoryDB.users.findIndex((i) => i.id === user.id);

    if (index >= 0) {
      inMemoryDB.users.splice(index, 1);
      return user;
    }

    return null;
  },
  getById: async (id) => {
    return inMemoryDB.users.find((i) => i.id === id);
  },
};
