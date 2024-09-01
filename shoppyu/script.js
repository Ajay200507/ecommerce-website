// Sample product data
const products = [
    { id: 1, name: 'Smartphone', category: 'electronics', price: 699, imageUrl: 'https://images.pexels.com/photos/17793437/pexels-photo-17793437/free-photo-of-browsing-the-website-on-a-smartphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Laptop', category: 'electronics', price: 999, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/80a2bb126031567.612542339630e.png' },
    { id: 3, name: 'Jeans', category: 'clothing', price: 50, imageUrl: 'https://img.freepik.com/free-psd/blue-jeans-isolated-transparent-background_191095-17296.jpg' },
    { id: 4, name: 'T-Shirt', category: 'clothing', price: 19, imageUrl: 'https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_640.jpg' },
    { id: 5, name: 'Watch', category: 'accessories', price: 199, imageUrl: 'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?cs=srgb&dl=pexels-joey-nguy-n-1056657-2113994.jpg&fm=jpg' },
    { id: 6, name: 'Sunglasses', category: 'accessories', price: 99, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnql-l_C7j9TPCfjB1zxms3zROQmJLg7iQw&s' }
];

let filterProducts = [];

// Function to navigate to product listing page with selected category
function show(category) {
    localStorage.setItem('selectedCategory', category);
    window.location.href = 'products.html';
}

// Function to go back to the homepage
function goBack() {
    window.location.href = 'index.html';
}

// Function to display products on the product listing page
function displayPro() {
    const category = localStorage.getItem('selectedCategory');
    const productList = document.getElementById('productList');
    filterProducts = products.filter(product => product.category === category);

    productList.innerHTML = '';
    filterProducts.forEach(product => {
        productList.innerHTML += `
            <div id="images" class="product">
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
            </div>
        `;
    });
}

// Function to filter products by price
function filterByPrice(maxPrice) {
    document.getElementById('priceValue').innerText = maxPrice;
    const productList = document.getElementById('productList');
    const filtered = filterProducts.filter(product => product.price <= maxPrice);

    productList.innerHTML = '';
    filtered.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
            </div>
        `;
    });
}

// Automatically display products when on the product listing page
// window.onload: This is an event handler that triggers a function when the entire webpage has finished loading
if (window.location.pathname.includes('products.html')) {
    window.onload = displayPro;
}
