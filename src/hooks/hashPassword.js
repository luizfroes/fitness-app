const bcrypt = require("bcrypt");

const beforeCreate = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;

  return data;
};

const beforeBulkCreate = async (users) => {
  const promises = users.map((user) => {
    return bcrypt.hash(user.password, 10);
  });

  const passwords = await Promise.all(promises);

  passwords.forEach((password, index) => {
    users[index].password = password;
  });
};

module.exports = { beforeCreate, beforeBulkCreate };
