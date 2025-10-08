function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartContent = document.getElementById('cartContent');
    const emptyCart = document.getElementById('emptyCart');

    if (cart.length === 0) {
        cartContent.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }

    cartContent.style.display = 'grid';
    emptyCart.style.display = 'none';

    const subtotal = getCartTotal();
    const delivery = getDeliveryCharge(subtotal);
    const total = subtotal + delivery;

    const itemsHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>${item.category}</p>
                <div class="cart-item-price">₹${item.price}</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        </div>
    `).join('');

    cartContent.innerHTML = `
        <div class="cart-items">${itemsHTML}</div>
        <div class="cart-summary">
            <h2>Order Summary</h2>
            <div class="summary-row">
                <span>Subtotal</span>
                <span>₹${subtotal}</span>
            </div>
            <div class="summary-row">
                <span>Delivery</span>
                <span>₹${delivery}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>₹${total}</span>
            </div>
            <a href="checkout.html" class="btn btn-primary btn-block">Proceed to Checkout</a>
        </div>
    `;
}

loadCart();
