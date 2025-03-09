// Adding and removing from cart functionality
import { getProductById } from "./Menu.js";

export async function addToCart(id) {
  const product = await getProductById(id);
  const results = app.store.cart.filter(
    (prodInCart) => prodInCart.product.id == id
  );
  if (results.length == 1) {
    // The product is already in the cart
    // Update the current item
    // Return the array with one element changed
    app.store.cart = app.store.cart.map(
        p => p.product.id == id
        ? { ...p, quantity: p.quantity+1 }
        : p
    );
  } else {
    // Add to cart
    app.store.cart = [...app.store.cart, {product, quantity: 1}];
  }
}

export async function removeFromCart(id) {
    app.store.cart = app.store.cart.filter(p => p.product.id != id)
}