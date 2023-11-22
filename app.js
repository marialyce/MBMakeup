  function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  };
  document.getElementById("myBtn").click();
const cart = [];
const productPrices = [3.99, 1.99];

function addToCart(productIndex){
    cart.push(productPrices[productIndex -1]);
    updateCart();
};
function updateCart(){
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = cart.map(
        price => `<li>$${price.toFixed(2)}</li>`).join('');
    const total = cart.reduce((acc, price) => acc + price, 0);
    cartTotal.textContent = total.toFixed(2);
};
function checkout(){ 
    cart.reduce((acc, price) => acc + price, 0).toFixed(2);
    cart.length = 0;
    updateCart();
};
