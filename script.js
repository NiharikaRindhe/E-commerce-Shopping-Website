document.addEventListener('DOMContentLoaded', function() {

    var addToCartButtons = document.querySelectorAll('.product-item .btn');


    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', addToCart);
    });

    // Event handler for "Add to Cart" button
    function addToCart(event) {

        event.preventDefault();

        // product details
        var productItem = event.target.closest('.product-item');
        var productName = productItem.querySelector('h3').textContent;
        var productPrice = productItem.querySelector('p').textContent;


        alert('Added ' + productName + ' to cart. Price: ' + productPrice);
    }


});