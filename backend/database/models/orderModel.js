const sequelize = require("../connection");
const {DataTypes, Model} = require('Sequelize');

class Order extends Model {}

Order.init({
    orderId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalAmount: {
        type: DataTypes.INTEGER
    },
    orderedOn: {
        type: DataTypes.DATE
    },
    deliveredOn: {
        type: DataTypes.DATE 
    },
    discountAmount: {
        type: DataTypes.NUMBER,
        defaultValue:0
    }
}, {
  sequelize,
  modelName: 'order',
  timestamps: false,
})

module.exports = Order;