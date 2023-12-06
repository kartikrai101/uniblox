const express = require('express');
const router = express.Router();
const {addProduct, removeProduct, getAllProducts, getProduct} = require('../controllers/productControllers')

router.route('/add').post(addProduct);
router.route('/remove').post(removeProduct);
router.route('/all').get(getAllProducts);
router.route('/get/:id').get(getProduct);

module.exports = router;