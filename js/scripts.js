function pizza(size, toppings, pickUpMethod) {
  this.size = size;
  this.toppings = toppings;
  this.pickUpMethod = pickUpMethod;
}

var price = 0

pizza.prototype.pizzaSizePrice = function(s) {
  if(s === "small") {
   price = 10;
  } else if(s === "medium") {
    price = 12;
  } else if(s === "large") {
    price = 15;
  } else {
    console.log("something went wrong in size");
  }
}

pizza.prototype.toppingsPrice = function(amountChecked) {
  price = price + (amountChecked * .50);
  
}

pizza.prototype.pickUpMethodPrice = function(selected) {
  if(selected === "pickUp") {
    price = price + 0;
  } else if(selected === "delivery") {
    price = price + 10;
  } else {
    console.log("Something went wrong in pickUpMethod");
  }
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("#size input[type='radio']:checked").val();
    var toppingsInput = $("input:checkbox[name=toppings]:checked").length;
    var methodInput = $("#method input[type='radio']:checked").val();
    var newPizza = new pizza(sizeInput, toppingsInput, methodInput);
    newPizza.pizzaSizePrice(sizeInput);
    newPizza.toppingsPrice(toppingsInput);
    newPizza.pickUpMethodPrice(methodInput);
    $("#priceOutput").append("Your order price is $" + price);
  });
});
