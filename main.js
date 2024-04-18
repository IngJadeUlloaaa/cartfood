document.addEventListener("DOMContentLoaded", function() {
    var cart = document.getElementById("cart");
    var itemList = document.getElementById("item-list");
    var total = document.getElementById("total");
    var productItems = document.querySelectorAll("#product-list li");
  
    var cartTotal = 0;
  
    productItems.forEach(function(item) {
      item.addEventListener("click", function() {
        var name = item.getAttribute("data-name");
        var price = parseFloat(item.getAttribute("data-price"));
        
        var newItem = document.createElement("li");
        newItem.textContent = name + " - $" + price;
        
        itemList.appendChild(newItem);
        
        cartTotal += price;
        total.textContent = "Total: $" + cartTotal.toFixed(2);
      });
    });
  });
  