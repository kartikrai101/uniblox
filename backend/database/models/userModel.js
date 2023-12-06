const sequelize = require("../connection");
const {DataTypes} = require('Sequelize')

const User = sequelize.define('users', {
    userId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cart: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT
    },
    orderCount: {
        type: DataTypes.NUMBER
    },
    coupons: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: []
    }
}, {
    freezeTableName: true
});

User.sync({alter: true});
module.exports = User;