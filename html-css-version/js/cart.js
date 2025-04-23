const cartItemsEl = document.getElementById("cart-items");
const totalEl = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartItemsEl.innerHTML = "<p>Your cart is empty.</p>";
} else {
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("div");
    li.className = "product-card";
    li.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <h2>${item.title}</h2>
      <p>$${item.price}</p>
    `;
    cartItemsEl.appendChild(li);
  });
  totalEl.textContent = `Total: $${total.toFixed(2)}`;
}

document.getElementById("clear-cart").onclick = () => {
  localStorage.removeItem("cart");
  location.reload();
};
