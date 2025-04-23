const productList = document.getElementById("product-list");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <h2>${product.title}</h2>
    <p>$${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(card);
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Added to cart!");
}
