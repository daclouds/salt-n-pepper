exports.save = function (entity) {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/salt');
    
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
	console.log('yay!');
	var transactionSchema = mongoose.Schema({
            'product_name': String,
            'deal_amount': Number,
            'currency-unit': String,
            'deal_date': Date
        });
        // transaction cannot has product infomation because we can't have all of partnership coorperation's products.

        var Transaction = mongoose.model('Transaction', transactionSchema);
        var tra = new Transaction(entity);
        console.log(tra);
        tra.save(function (err, transaction) {
            if (err) return console.error(err);
            console.log(transaction, ' saved');
        });

    });
    
};
