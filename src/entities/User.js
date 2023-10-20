module.exports.User = class User {
  constructor({ id, name = null, lastname = null, gender, meta }) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.gender = genders.NOT_SPECIFIED;
    this.meta = meta;
  }
};

// Enum for example
// Like enum
const genders = {
  NOT_SPECIFIED: 0,
  MALE: 1,
  FEMALE: 2,
};

module.exports.userConstants = {
  genders,
};
