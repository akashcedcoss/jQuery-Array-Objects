// var html = "";
// var cart = "";
var cartArray = [];
var products = [
  { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
  { id: 102, name: "Football", image: "football.png", price: 120 },
  { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
  { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
  { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
];

$(document).ready(function () {
  // HEADER SECTION
  $("#header").html(`<h1 id="logo">Logo</h1>
    <nav>
        <ul id="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>`);

  // BODY SECTION
  $("#products").html(display(products));

  //ADD TO CART
  $(".add-to-cart").click(function () {
    var productID = $(this).data("id");
    var pro = getProduct(productID);
    cartArray.push(pro);
    var prodis = addCart(cartArray);
    $("#addcart").html(prodis);
    
    console.log(cartArray);
    
  });

  // FOOTER SECTION
  $("#footer").html(`<nav>
    <ul id="footer-links">
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Declaimers</a></li>
    </ul>
</nav>`);
});

function display(result) {
    var html = "";
  for (var i = 0; i < result.length; i++) {
    html += `<div id="product-${result[i].id}" class="product">
        <img src="images/${result[i].image}">
        <h3 class="title"><a href="#">Product ${result[i].id}</a></h3>
        <span>Price: ${result[i].price}</span>
        <a data-id="${result[i].id}" class="add-to-cart" href="#">Add To Cart</a>
    </div>`;
  }
  return html;
}
function getProduct(id) {
  for (var i = 0; i < products.length; i++) {
    if (id == products[i].id) {
      return products[i];
    }
  }
}
function addCart(result) {
    var text = "";
  for (var i = 0; i < result.length; i++) {
    text += `<div id="product-${result[i].id}" class="product">
        <img src="images/${result[i].image}">
        <h3 class="title"><a href="#">Product ${result[i].id}</a></h3>
        <span>Price: ${result[i].price}</span>
    </div>`;
  }
  return text;
}


