const { Sequelize, DataTypes } = require("sequelize");

const UserModel = require("./user");
const ProductModel = require("./product");
const OrderModel = require("./order");

const sequelize = new Sequelize("sqlite::memory:");

const db = {
  User: UserModel(sequelize, DataTypes),
  Product: ProductModel(sequelize, DataTypes),
  Order: OrderModel(sequelize, DataTypes),
  sequelize,
};

module.exports = db;
