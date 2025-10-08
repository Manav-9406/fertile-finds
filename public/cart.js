// Cart management functions
function addToCart(productId) {
    fetch('data.json')
        .then(res => res.json())
        .then(products => {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            showNotification('Added to cart!');
        });
}

function removeFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const filtered = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(filtered));
    updateCartCount();
    if (window.loadCart) loadCart();
}

function updateQuantity(productId, quantity) {
    if (quantity < 1) return;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        if (window.loadCart) loadCart();
    }
}

function getCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getDeliveryCharge(subtotal) {
    return 50; // Fixed ₹50 delivery charge
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = 'position:fixed;top:20px;right:20px;background:#22c55e;color:white;padding:1rem 2rem;border-radius:8px;z-index:1000;box-shadow:0 4px 12px rgba(0,0,0,0.2);';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}
