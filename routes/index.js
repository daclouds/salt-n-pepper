var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/product/:productId', function(req, res) {
  res.render('product', { productId: req.params.productId });
});	

module.exports = router;
