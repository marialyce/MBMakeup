
function myAccFunc() {
  var x = document.getElementById("");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
document.getElementById("myBtn").click();

function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Click on the "Jeans" link on page load to open the accordion for demo purposes
document.getElementById("myBtn").click();


function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}



const cart = [];
const productPrices = [75.90, 58.00, 30.50, 25.50, 59.99, 39.99, 56.87, 28.97, 74.90, 24.90, 81.90, 49.99, 48.00, 52.00, 40.00, 45.90, 20.00, 22.90, 45.50, 44.00, 99.90, 59.99, 118.99, 19.90, 17.99, 32.90, 25.00, 20.03, 25.00, 43.90, 22.88, 10.95, 58.23, 82.90, 179.90, 89.90, 38.90, 84.92, 38.24, 75.99, 44.00, 35.90, 27.70, 89.99, 79.90];

function addToCart(productIndex){
    cart.push(productPrices[productIndex -1]);
    updateCart();
}
function updateCart(){
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = cart.map(
        price => `<li>$${price.toFixed(2)}</li>`).join('');
    const total = cart.reduce((acc, price) => acc + price, 0);
    cartTotal.textContent = total.toFixed(2);
}
function checkout(){
    alert("Obrigado por sua compra! Total: R$" + 
    cart.reduce((acc, price) => acc + price, 0).toFixed(2));
    cart.length = 0;
    updateCart();
}


