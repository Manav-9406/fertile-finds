let allProducts = [];

fetch('data.json')
    .then(res => res.json())
    .then(products => {
        allProducts = products;
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        if (category) {
            document.getElementById('categoryFilter').value = category;
        }
        filterProducts();
    });

function filterProducts() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const sort = document.getElementById('sortFilter').value;

    let filtered = [...allProducts];

    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }

    if (search) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(search) || 
            p.description.toLowerCase().includes(search)
        );
    }

    filtered.sort((a, b) => {
        switch(sort) {
            case 'price-low': return a.price - b.price;
            case 'price-high': return b.price - a.price;
            case 'rating': return b.rating - a.rating;
            default: return a.name.localeCompare(b.name);
        }
    });

    const grid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');
    
    if (filtered.length === 0) {
        grid.style.display = 'none';
        noProducts.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        noProducts.style.display = 'none';
        grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
    }

    document.getElementById('productCount').textContent = `${filtered.length} products found`;
}

document.getElementById('searchInput').addEventListener('input', filterProducts);
document.getElementById('categoryFilter').addEventListener('change', filterProducts);
document.getElementById('sortFilter').addEventListener('change', filterProducts);
