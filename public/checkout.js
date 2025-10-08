function loadCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }

    const subtotal = getCartTotal();
    const delivery = 50;
    const total = subtotal + delivery;

    const itemsHTML = cart.map(item => `
        <div class="order-item">
            <div>
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-qty">Qty: ${item.quantity}</div>
            </div>
            <div>₹${item.price * item.quantity}</div>
        </div>
    `).join('');

    document.getElementById('orderItems').innerHTML = itemsHTML;
    document.getElementById('subtotal').textContent = `₹${subtotal}`;
    document.getElementById('deliveryCharge').textContent = `₹${delivery}`;
    document.getElementById('total').textContent = `₹${total}`;
}

document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    localStorage.removeItem('cart');
    window.location.href = 'order-success.html';
});

loadCheckout();
