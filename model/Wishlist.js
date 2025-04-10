module.exports = (sequelize, Sequelize) => {
  const Wishlist = sequelize.define("wishlist", {
    customerId: {
      type:Sequelize.INTEGER,
      primaryKey:true
    },
    productId: {
      type:Sequelize.INTEGER,
      primaryKey:true
    },
  });
  return Wishlist;
};
