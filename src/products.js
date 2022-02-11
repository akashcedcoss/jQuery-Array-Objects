var products = [
  { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
  { id: 102, name: "Football", image: "football.png", price: 120 },
  { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
  { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
  { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
];

$(document).ready(function(){

    // HEADER SECTION 
    $('#header').html(`<h1 id="logo">Logo</h1>
    <nav>
        <ul id="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>`);
   // FOOTER SECTION
    $('#footer').html(`<nav>
    <ul id="footer-links">
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Declaimers</a></li>
    </ul>
</nav>`)
});
