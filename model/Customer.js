module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
  });
  return Customer;
};
