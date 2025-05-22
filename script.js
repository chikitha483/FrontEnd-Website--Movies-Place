let cart = [];
let totalPrice = 0;

function addToCart(movie, price) {
  cart.push({ movie, price });
  totalPrice += price;

  updateCartUI();
}

function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  // Clear previous cart UI
  cartItems.innerHTML = '';

  // Populate cart
  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.movie} - $${item.price}`;
    listItem.style.marginBottom = '5px';
    listItem.style.cursor = 'pointer';
    listItem.onclick = () => removeFromCart(index);
    cartItems.appendChild(listItem);
  });

  // Update total price
  totalPriceElement.textContent = `Total Price: $${totalPrice}`;
}

function removeFromCart(index) {
  const removedItem = cart.splice(index, 1)[0];
  totalPrice -= removedItem.price;

  updateCartUI();
}
