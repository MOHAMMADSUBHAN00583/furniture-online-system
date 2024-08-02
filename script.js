const products = [
    { name: 'Sofa', price: 499.99, image: 'images/sofa.jpg' },
    { name: 'Table', price: 299.99, image: 'images/table.jpg' },
    { name: 'Chair', price: 199.99, image: 'images/chair.jpg' },
    { name: 'Bed', price: 699.99, image: 'images/bed.jpg' },
    { name: 'Cabinet', price: 249.99, image: 'images/cabinet.jpg' },
    { name: 'Desk', price: 199.99, image: 'images/desk.jpg' },
    { name: 'Bookshelf', price: 149.99, image: 'images/bookshelf.jpg' },
    { name: 'Wardrobe', price: 599.99, image: 'images/wardrobe.jpg' },
    { name: 'Dresser', price: 349.99, image: 'images/dresser.jpg' },
    { name: 'Armchair', price: 299.99, image: 'images/armchair.jpg' },
    { name: 'Stool', price: 99.99, image: 'images/stool.jpg' },
    { name: 'Dining Set', price: 899.99, image: 'images/dining_set.jpg' },
    { name: 'TV Stand', price: 179.99, image: 'images/tv_stand.jpg' },
    { name: 'Coffee Table', price: 129.99, image: 'images/coffee_table.jpg' },
    { name: 'Recliner', price: 399.99, image: 'images/recliner.jpg' },
    { name: 'Nightstand', price: 89.99, image: 'images/nightstand.jpg' },
    { name: 'Patio Set', price: 499.99, image: 'images/patio_set.jpg' },
    { name: 'Bean Bag', price: 79.99, image: 'images/bean_bag.jpg' },
    { name: 'Ottoman', price: 109.99, image: 'images/ottoman.jpg' },
    { name: 'Bench', price: 149.99, image: 'images/bench.jpg' },
];

let cart = [];

function showPage(page) {
    const pages = ['home', 'products', 'cart', 'contact'];
    pages.forEach(p => {
        document.getElementById(p).classList.add('hidden');
    });
    document.getElementById(page).classList.remove('hidden');

    if (page === 'products') {
        displayProducts();
    } else if (page === 'cart') {
        displayCart();
    }
}

function displayProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
    productsSection.classList.remove('hidden');
    const productsContainer = document.createElement('div');
    productsContainer.classList.add('products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });

    productsSection.appendChild(productsContainer);
}

function addToCart(productName, productPrice, productImage) {
    cart.push({ name: productName, price: productPrice, image: productImage });
    displayCart();
}

function displayCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${item.image}" alt="${item.name}">${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
        total += item.price;
    });

    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}
