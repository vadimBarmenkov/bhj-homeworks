const products = Array.from(document.getElementsByClassName('product'));
const productCart = document.querySelector('.cart__products');

products.forEach(function (element, index) {
    const productCounter = element.querySelector('.product__quantity-value');
    element.querySelector('.product__quantity-control_dec').addEventListener('click', () => Number(productCounter.textContent) > 1 ?  productCounter.textContent =
        String( Number(productCounter.textContent) - 1) : console.log('product in null yet') );
    element.querySelector('.product__quantity-control_inc').addEventListener('click', () => productCounter.textContent =
        String( Number(productCounter.textContent) + 1) );

    element.querySelector('.product__add').addEventListener('click', () => {
        const test = Array.from(productCart.querySelectorAll('.cart__product')).filter( e => e.dataset.id == index + 1);
        test.length != 0 ? test[0].querySelector('.cart__product-count').textContent = String(Number(test[0].querySelector('.cart__product-count').textContent) + Number(productCounter.textContent)) :
        productCart.insertAdjacentHTML('afterBegin', '<div class="cart__product" data-id='+ element.dataset.id +'><img class="cart__product-image" src=' + element.querySelector('img').src + '><div class="cart__product-count">' + productCounter.textContent + '</div></div>');
    });

});