document.addEventListener('DOMContentLoaded', function() {
    const sizeSelect = document.querySelector("select[name='id']");
    const addToCartBtn = document.querySelector(".add-to-cart");
    const stockInfo = document.querySelector(".stock-info");
    if (sizeSelect && addToCartBtn && window.product.variants) {
        sizeSelect.addEventListener('change', function() {
        const selectedId = sizeSelect.value;
        const variant = window.product.variants.find( variant => variant.id === parseInt(selectedId));
        if (variant && variant.available) {
                addToCartBtn.classList.remove('red-button');
                addToCartBtn.disabled = false;
                addToCartBtn.classList.add('green-button');
                console.log(variant.inventory_quantity);
                if (variant.inventory_quantity > 5) {
                    stockInfo.textContent = 'Available!';
                } else {
                    stockInfo.textContent = 'Low stock';
                }

        } else {
            addToCartBtn.classList.remove('green-button');
            addToCartBtn.classList.add('red-button');
            addToCartBtn.disabled = true;
            stockInfo.textContent = '   ';
        }
    });
    };
});