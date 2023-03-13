const bcryptjs = require("bcryptjs");

const encryptPassword = (password) => {
  const salt = bcryptjs.genSaltSync(10);
  return bcryptjs.hashSync(password, salt);
}

module.exports = encryptPassword;