// require express
const express = require('express');
// require router
const router = express.Router();
// require product
router.use('/products',require('./product'));

module.exports = router;