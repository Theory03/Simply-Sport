// Initialize an empty cart
let cart = [];

// Function to add a product to the cart
function addToCart(productName, price) {
  cart.push({ productName, price });
  alert(`${productName} has been added to your cart!`);
  console.log("Current Cart:", cart);
}

// Attach event listeners to buttons
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product-card button");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const productName = button.parentElement.querySelector("h2").innerText;
      const price = button.parentElement.querySelector("p").innerText;
      addToCart(productName, price);
    });
  });
});
