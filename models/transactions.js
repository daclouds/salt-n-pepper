'use strict';

exports.save = function (entity) {
    var mongoose = require('mongoose'), db = mongoose.connect('mongodb://localhost/salt').connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
        console.log('yay!');
        var transactionSchema = mongoose.Schema({ // transaction cannot has product infomation because we can't have all of partnership coorperation's products.
            'product_name': String,
            'deal_amount': Number,
            'currency-unit': String,
            'deal_date': Date
        }), Transaction = mongoose.model('Transaction', transactionSchema), tra = new Transaction(entity);
        console.log(tra);
        tra.save(function (err, transaction) {
            if (err) {
                return console.error(err);
            }
            console.log(transaction, ' saved');
        });
    });
};
