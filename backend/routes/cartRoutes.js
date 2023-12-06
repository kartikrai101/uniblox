const express = require('express');
const router = express.Router();
const {addToCart, removeFromCart, placeOrder} = require('../controllers/cartControllers');
const {authenticateUser} = require('../controllers/userControllers');

router.route('/add').post(authenticateUser, addToCart)
router.route('/remove').post(authenticateUser, removeFromCart)


router.route('/order').post(authenticateUser, placeOrder)

module.exports = router;