const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });

  // Додайте асоціації між моделями
  Order.associate = function (models) {
    Order.belongsToMany(models.Product, { through: "OrderProducts" });
  };
};
