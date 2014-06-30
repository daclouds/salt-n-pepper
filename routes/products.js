'use strict';

var express = require('express');
var router = express.Router();

var transactionModel = require('../models/transactions');

/* GET product detail */
router.get('/form', function (req, res) {
    res.render('product', null);
});

router.get('/:productId', function (req, res) {

    /* sample product */
    var product = {
        'id': 1,
        'name': 'The Lean Startup',
        'price': 18000,
        'currency-unit': 'won'
    };

    res.set({ 'Content-Type': 'application/json' });
    res.json(product);
});

router.post('/purchase', function (req, res) {
    var transaction = {
        'product_name': req.body.product.name,
        'deal_amount': req.body.product.price,
        'currency-unit': req.body.product['currency-unit'],
        'deal_date': new Date()
    };
    transactionModel.save(transaction);
    res.header('Content-Type', 'application/json');
    res.json('completed');
});

module.exports = router;
