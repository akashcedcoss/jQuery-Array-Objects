var products = [
    { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
    { id: 102, name: "Football", image: "football.png", price: 120 },
    { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
    { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
    { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
  ];
  var cartArray = [];

  // var qty_array = [];
// for(var i = 0; i < products.length; i++){
//     obj = {};
//     obj[products[i].id] = 0;
//     qty_array.push(obj)
// }
  
  $(document).ready(function(){
    header();
    $('#products').after('<div id = "cartDiv"></div>') //Products Added
    
    $("#products").html(listProducts(products));
    
  
    //Add to Cart Function
    $(".add-to-cart").click(function () {
      var p_id = $(this).data("pid"); //fetching id of product to be added to cart
      var prod = getProduct(p_id); // fetching the object(product) to be added to cart
      var quantity = 0;
      if (cartArray.length == 0){
          prod.quantity = 1;
          cartArray.push(prod);
      }
      else{
          if (cartArray.includes(prod)){
              prod.quantity +=1;
          }
          else{
              prod.quantity = 1;
              cartArray.push(prod);
          }
      }
      displayCart();
    });
  
  
  
  
  
    $(`body`).on('click', '.update_button', function(){
        var button_id = $(this).data('tt');
        var qt = $('#'+button_id).val();
        var u_obj = getProduct(button_id);
        u_obj.quantity += parseInt(qt);
        displayCart();
      });
    
       $(`body`).on('click', '.rmBtn', function(){
         var rm_id = $(this).data('rm_id');
         var rmObj = getProduct(rm_id);
         cartArray.splice(cartArray.indexOf(rmObj), 1);
         displayCart();
        });
    
        
        $(`body`).on('click', '.emptyCart', function(){
         cartArray = [];
         displayCart();
        });
    
        $('body').on('click', '')
});

  ///////////////////////////////////

//////Quantity//////

// $('#btn1').click(function(){
//     qty += 1;
//     $('#qt').html(qty);

//     console.log(qty);
// })
// $('#btn2').click(function(){
//     qty -= 1;
//     $('#qt').html(qty);
//     console.log(qty);
// })
  
  function listProducts(arr) {
    html = "";
    for (var i = 0; i < arr.length; i++) {
      html += `<div id="product-${arr[i].id}" class="product">
                  <img src="images/${arr[i].image}">
                  <h3 class="title"><a href="#">Product ${arr[i].id}</a></h3>
                  <span>Price: ${arr[i].price}</span>
                  <a class="add-to-cart" data-pid = "${arr[i].id}" href="#">Add To Cart</a>
              </div>`;
    }
    return html
  
  }
  function header() {
    $("#header").html(`<h1 id="logo">Logo</h1>
      <nav>
          <ul id="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </nav>`);
  }
  //function to return matching object from array
  function getProduct(id) {
    for (var i = 0; i < products.length; i++) {
      if (id == products[i].id) {
        return products[i];
      }
    }
  }
  
  function displayCart(){
    var cartTable = `<div><div class="fl_l"><span>Cart</span></div><div class = "fl_r"><a href = "#" class = "emptyCart">Empty Cart</a></div></div><div><table>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Update Quantity</th>
                      <th>Total Price</th>
                      <th>Remove Item</th>
                  </tr>`;
   for (var i=0; i<cartArray.length; i++){
     cartTable += `<tr>
       <td>${cartArray[i].id}</td>
       <td>${cartArray[i].name}</td>
       <td><img src = "images/${cartArray[i].image}"></td>
       <td>${cartArray[i].price}</td>
       <td>${cartArray[i].quantity}</td>
       <td><input class = "update_id" type = "number" id = "${cartArray[i].id}"><input type = "button" data-tt="${cartArray[i].id}" class = "update_button" value="Update"></td>
       <td>${cartArray[i].price * cartArray[i].quantity}</td>
       <td><a href = "#" class = "rmBtn" id= "rm${cartArray[i].id}" data-rm_id = "${cartArray[i].id}">X</a></td>
     </tr>`;
   }  
    cartTable += `</table></div>`;
          
    $('#cartDiv').html(cartTable);
    var s = cartSum();
    $('table').after(`<div class = "cartPrice">Total Price = ${s}</div>`)
  }
  
  function cartSum(){
    var sum=0;
    for (var i = 0; i<cartArray.length; i++){
      sum += cartArray[i].quantity * cartArray[i].price;
    }
    return sum;
  }