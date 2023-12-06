const sequelize = require("../connection");
const {DataTypes} = require('Sequelize')

const Product = sequelize.define('products', {
    productId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shortDescription: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    },
    type: {
        type: DataTypes.STRING
    },
    imgUrl: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.INTEGER
    },
    specs: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
        defaultValue: []
    },
    rating: {
        type: DataTypes.STRING
    },
    reviews: {
        type: DataTypes.STRING
    },
    prevMonth: {
        type: DataTypes.STRING
    },
    deliveredIn: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

Product.sync({alter: true});
module.exports = Product;