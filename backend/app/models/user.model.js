module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    Name: {
      type: Sequelize.STRING(36),
      allowNull:false,
    },
    Email: {
      type: Sequelize.STRING(36),
      allowNull:false
    },
    Password: {
      type: Sequelize.STRING(8),
      primaryKey:true,
      allowNull:false
    }
  });

  return User;
};