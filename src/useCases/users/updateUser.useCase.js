const { User } = require("../../entities");

module.exports = (dependecies) => {
  const { usersRepository } = dependecies;

  if (!usersRepository) {
    throw new Error("The users repository should be exist in dependicies");
  }

  const execute = ({ name, lastname, gender, meta }) => {
    const user = new User({ name, lastname, gender, meta });

    return usersRepository.add(user);
  };

  return { execute };
};
