var express = require('express');
var router = express.Router();

/* sample product */
var product = {
  'id': 1,
  'name': 'The Lean Startup',
  'price': 18000,
  'currency-unit': 'won'
}

/* GET product detail */
router.get('/:productId', function(req, res) {
	  res.render('product', { product: product });
});

module.exports = router;
