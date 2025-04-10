const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("project", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

const User = require("./User")(sequelize, Sequelize);
const Card = require("./Card")(sequelize, Sequelize);
const Category = require("./Category")(sequelize, Sequelize);
const Feedback = require("./Feedback")(sequelize, Sequelize);
const Order = require("./Order")(sequelize, Sequelize);
const Product = require("./Product")(sequelize, Sequelize);
const Productimages = require("./Productimages")(sequelize, Sequelize);
const Subcategory = require("./Subcategory")(sequelize, Sequelize);
const Wishlist = require("./Wishlist")(sequelize, Sequelize);
const Manager = require("./Manager")(sequelize, Sequelize);
const Customer = require("./Customer")(sequelize, Sequelize);

Manager.belongsTo(User, {
  foreignKey: "userId",
  onupdate: "cascade",
  ondelete: "cascade",
});

Customer.belongsTo(User, {
  foreignKey: "userId",
  onupdate: "cascade",
  ondelete: "cascade",
});

Card.belongsTo(Product, {
  foreignKey: "productId",
  onupdate: "cascade",
  ondelete: "cascade",
});
Card.belongsTo(Customer, {
  foreignKey: "customerId",
  onupdate: "cascade",
  ondelete: "cascade",
});

Feedback.belongsTo(Order, {
  foreignKey: "orderId",
  onupdate: "cascade",
  ondelete: "cascade",
});
Order.belongsTo(Customer, {
  foreignKey: "customerId",
  onupdate: "cascade",
  ondelete: "cascade",
});
Order.belongsTo(Product, {
  foreignKey: "productId",
  onupdate: "cascade",
  ondelete: "cascade",
});
Product.belongsTo(Manager, {
  foreignKey: "managerId",
  onupdate: "cascade",
  ondelete: "cascade",
});
Productimages.belongsTo(Product, {
  foreignKey: "productId",
  onupdate: "cascade",
  ondelete: "cascade",
});
Subcategory.belongsTo(Category, {
  foreignKey: "categoryId",
  onupdate: "cascade",
  ondelete: "cascade",
});
Product.belongsTo(Subcategory, {
  foreignKey: "subcategoryId",
  onupdate: "cascade",
  ondelete: "cascade",
});

Wishlist.belongsTo(Customer, {
  foreignKey: "customerId",
  onupdate: "cascade",
  ondelete: "cascade",
});
Wishlist.belongsTo(Product, {
  foreignKey: "productId",
  onupdate: "cascade",
  ondelete: "cascade",
});

User.hasOne(Manager, { foreignKey: "userId" });
User.hasOne(Customer, { foreignKey: "userId" });

Product.hasMany(Card, { foreignKey: "productId" });
Product.hasMany(Productimages, { foreignKey: "productId" });
Product.hasMany(Wishlist, { foreignKey: "productId" });
Product.hasMany(Order, { foreignKey: "productId" });

Customer.hasMany(Card, { foreignKey: "customerId" });
Customer.hasMany(Order, { foreignKey: "customerId" });
Customer.hasMany(Subcategory, { foreignKey: "customerId" });
Customer.hasMany(Wishlist, { foreignKey: "customerId" });

Order.hasMany(Feedback, { foreignKey: "orderId" });
Manager.hasMany(Product, { foreignKey: "managerId" });
Subcategory.hasMany(Product, { foreignKey: "subcategoryId" });
Category.hasMany(Subcategory, { foreignKey: "categoryId" });

sequelize.sync();
module.exports = {
  User,
  sequelize,
  Card,
  Category,
  Feedback,
  Order,
  Product,
  Productimages,
  Subcategory,
  Wishlist,
  Manager,
  Customer,
};
