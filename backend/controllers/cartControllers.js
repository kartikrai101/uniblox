const Cart = require('../database/models/cartModel');
const { v4: uuidv4 } = require('uuid');

exports.addToCart = async (req, res) => {
    try{
        const data = req.body;
        const productId = data.productId;
        const userId = req.user.userId;
        const cartId = uuidv4();

        const response = Cart.create({
            cartId: cartId,
            userId: userId,
            productId: productId
        })

        res.json({
            success: true,
            message: "successfully added the item to cart",
            body: response
        })

    }catch(err){
        res.json({
            success: false,
            message: "could not add items to cart"
        })
    }
}

exports.removeFromCart = async (req, res) => {
    try{
        const data = req.body;
        const productId = data.productId;
        const userId = req.user.userId;

        const response = Cart.destroy({
            where: {
                productId: productId,
                userId: userId
            }
        })

        res.json({
            success: true,
            message: "successfully removed item from the cart",
            body: response
        })

    }catch(err){
        res.json({
            success: false,
            message: "could not remove item from cart"
        })
    }
}

exports.viewCart = async (req, res) => {
    try{
        const userId = req.user.userId;
        //just need to fetch all the items in the cart that match with this user id
        const items = await Cart.findAll({
            where: {
                userId: userId
            }
        })

        res.json({
            success: true,
            message: "successfully fetched all cart contents",
            body: items
        })
    }catch(err){
        res.json({
            success: false,
            message: "could not view the cart",
            body: err
        })
    }
}

exports.placeOrder = async (req, res) => {
    try{
        const userId = req.user.userId;
        const orderId = uuidv4();

    }catch(err){
        res.json({
            success: false,
            message: "could not place the order",
            body: err
        })
    }
}