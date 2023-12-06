const sequelize = require("../connection");
const {DataTypes} = require('Sequelize')

const Coupon = sequelize.define('coupons', {
    couponId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

Coupon.sync({alter: true});
module.exports = Coupon;