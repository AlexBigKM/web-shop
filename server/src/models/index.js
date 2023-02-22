const db = {
  User: UserModel(sequelize, DataTypes),
  Product: ProductModel(sequelize, DataTypes),
  Order: OrderModel(sequelize, DataTypes),
};