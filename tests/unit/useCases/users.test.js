const {
  user: { addUserUseCase },
} = require("../../../src/useCases");

const {
  User,
  constants: {
    userConstants: { genders },
  },
} = require("../../../src/entities");

const Chance = require("chance");

const chance = new Chance();

describe("User use cases", () => {
  const mockUserRepo = {
    add: jest.fn(async (user) => {
      return { ...user, id: 1 };
    }),
  };

  const dependecies = {
    usersRepository: mockUserRepo,
  };
  describe("Add User Use Case", () => {
    it("User should be added ", async () => {
      const testUserData = {
        name: chance.name(),
        lastname: chance.last(),
        gender: genders.FEMALE,
        meta: {
          hair: {
            color: "red",
          },
        },
      };

      const addedUser = await addUserUseCase(dependecies).execute(testUserData);

      expect(addedUser).toBeDefined();
      expect(addedUser.id).toBe(1);
    });
  });
});
