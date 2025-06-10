document.addEventListener('DOMContentLoaded', function() {
    const sizeSelect = document.querySelector("select[name='id']");
    const addToCartBtn = document.querySelector(".add-to-cart");
    if (sizeSelect && addToCartBtn && window.product.variants) {
        sizeSelect.addEventListener('change', function() {
        const selectedId = sizeSelect.value;
        const variant = window.product.variants.find( variant => variant.id === parseInt(selectedId));
        if (variant && variant.available) {
                addToCartBtn.classList.remove('red-button');
                addToCartBtn.disabled = false;
                addToCartBtn.classList.add('green-button');

        } else {
            addToCartBtn.classList.remove('green-button');
            addToCartBtn.classList.add('red-button');
            addToCartBtn.disabled = true;
        }
        }
        );
    };
});