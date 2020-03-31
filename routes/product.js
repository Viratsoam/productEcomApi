// Require express
const express = require('express');
const router  = express.Router();
// require api
const ProductConrtoller = require('../controller/api/v1/index');

// Routes
router.post('/create',ProductConrtoller.create);
router.get('/',ProductConrtoller.showProduct);
router.delete('/:id',ProductConrtoller.deleteProduct);
router.post('/:id/update_quantity/',ProductConrtoller.update);


module.exports = router;