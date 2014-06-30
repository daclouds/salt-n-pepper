jQuery(function($) {
    var productId = 1;
    $.get('/products/' + productId, function(product) {
        console.log(product);
        $('#name').text(product.name);
        $('#price').text(product.price);
        $('#currency-unit').text(product['currency-unit']);
    });
        
    
    $('#buy').click(function() {
        var product = {
            'name': $('#name').text(),
            'price': $('#price').text(),
            'currency-unit': $('#currency-unit').text()
        };

        console.log(product);
        $.post('/products/purchase', { product: product }, function(res) {
            alert(res);
        });
    });
});
