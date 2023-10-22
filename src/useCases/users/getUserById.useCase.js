module.exports = (dependecies) => {
  const { usersRepository } = dependecies;

  if (!usersRepository) {
    throw new Error("The users repository should be exist in dependicies");
  }

  const execute = (user = {}) => {
    return usersRepository.update(user);
  };

  return { execute };
};
