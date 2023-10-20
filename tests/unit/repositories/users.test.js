const Chance = require('chance');

const chance = new Chance();

const {
  usersRepository,
} = require('../../../src/frameworks/repositories/inMemory');

const {
  User,
  constants: {
    userConstants: { genders },
  },
} = require('../../../src/entities');

const { cloneDeep } = require('lodash');

describe('Users repository', () => {
  test('New user should be added and returned', async () => {
    const testUser = new User({
      name: chance.name(),
      lastname: chance.last(),
      gender: genders.FEMALE,
      meta: { hair: { color: 'black' } },
    });

    const addedUser = await usersRepository.add(testUser);

    expect(addedUser).toBeDefined();
    expect(addedUser.id).toBeDefined();
    expect(addedUser.name).toBe(testUser.name);
    expect(addedUser.lastname).toBe(testUser.lastname);
    expect(addedUser.gender).toBe(testUser.gender);

    expect(addedUser.meta).toEqual(testUser.meta);

    const returnedUser = await usersRepository.getById(addedUser.id);
    expect(returnedUser).toEqual(addedUser);
  });

  test('New user should be deleted', async () => {
    // ASSERT
    const shouldBeDeletedUser = new User({
      name: chance.name(),
      lastname: chance.last(),
      gender: genders.FEMALE,
      meta: { hair: { color: 'black' } },
    });

    const user = new User({
      name: chance.name(),
      lastname: chance.last(),
      gender: genders.MALE,
      meta: { hair: { color: 'black' } },
    });

    // Add two users
    const [shouldBeDeletedAddedUser, userAdded] = await Promise.all([
      usersRepository.add(shouldBeDeletedUser),
      usersRepository.add(user),
    ]);
    expect(shouldBeDeletedAddedUser).toBeDefined();
    expect(userAdded).toBeDefined();
    // Delete one user
    const deletedUser = await usersRepository.delete(shouldBeDeletedAddedUser);

    expect(deletedUser).toEqual(shouldBeDeletedAddedUser);

    const shouldBeUndefinedUser = await usersRepository.getById(deletedUser.id);

    expect(shouldBeUndefinedUser).toBeUndefined();

    const shouldBeDefinedUser = await usersRepository.getById(userAdded.id);

    expect(shouldBeDefinedUser).toBeDefined();
  });

  test('New user should be updated and returned', async () => {
    // added a user
    const testUser = new User({
      name: chance.name(),
      lastname: chance.last(),
      gender: genders.FEMALE,
      meta: { hair: { color: 'black' } },
    });

    const addedUser = await usersRepository.add(testUser);
    expect(addedUser.name).not.toBe('John');
    // update a user
    addedUser.name = 'John';
    const updatedUser = await usersRepository.update(addedUser);
    const finilazeUser = await usersRepository.getById(updatedUser.id);

    expect(finilazeUser).toBeDefined();
    expect(finilazeUser.name).toBe('John');
  });
});
