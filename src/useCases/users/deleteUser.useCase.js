module.exports = (dependecies) => {
  const { usersRepository } = dependecies;

  if (!usersRepository) {
    throw new Error("The users repository should be exist in dependicies");
  }

  const execute = (user = {}) => {
    return usersRepository.delete(user);
  };

  return { execute };
};
