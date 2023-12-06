const express = require('express');
const router = express.Router();
const {addProduct, removeProduct} = require('../controllers/productControllers')

router.route('/add').post(addProduct);
router.route('/remove').post(removeProduct);

module.exports = router;