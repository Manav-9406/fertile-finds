// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Create product card HTML
function createProductCard(product) {
    const discount = product.discount > 0 ? `<span class="product-discount">${product.discount}% OFF</span>` : '';
    const originalPrice = product.originalPrice ? `<span class="price-original">₹${product.originalPrice}</span>` : '';
    const stockClass = product.inStock ? 'stock-in' : 'stock-out';
    const stockText = product.inStock ? 'In Stock' : 'Out of Stock';
    const addToCartBtn = product.inStock ? `<button class="btn btn-primary" onclick="addToCart('${product.id}')">Add to Cart</button>` : `<button class="btn btn-primary" disabled>Out of Stock</button>`;
    
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-stock ${stockClass}">${stockText}</div>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price-current">₹${product.price}</span>
                        ${originalPrice}
                    </div>
                    ${discount}
                </div>
                <div class="product-rating" style="margin: 0.5rem 0;">
                    <span>⭐ ${product.rating}</span>
                </div>
                ${addToCartBtn}
            </div>
        </div>
    `;
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => el.textContent = count);
}

// Initialize cart count on page load
updateCartCount();
