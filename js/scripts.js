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
  price = price + (amountChecked * .5);
  
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

// pizza.prototype.finalPrice = function(size, toppings, pickUpMethod) {
//   console.log(price)
// };

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("#size input[type='radio']:checked").val();
    // #toppings input[type='checkbox']:checked
    var toppingsInput = $("input:checkbox[name=toppings]:checked").length;
    var methodInput = $("#method input[type='radio']:checked").val();
    var newPizza = new pizza(sizeInput, toppingsInput, methodInput);
    console.log("This is the price: " + price);
    console.log(newPizza.pizzaSizePrice(sizeInput));
    console.log(newPizza.toppingsPrice(toppingsInput));
    console.log(newPizza.pickUpMethodPrice(methodInput));
    console.log("This is the final price: " + price);
  });
});
