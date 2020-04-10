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
  } else{
    alert("Select a pizza size");
  }
}

pizza.prototype.toppingsPrice = function(amountChecked) {
  if(amountChecked > 0) {
    price = price + (amountChecked * .50);
  } else {
    alert("Select at least one topping")
  }
}

pizza.prototype.pickUpMethodPrice = function(selected) {
  if(selected === "pickUp") {
    price = price + 0;
  } else if(selected === "delivery") {
    price = price + 10;
  } else {
    alert("Select a delivery method");
  }
}

function Address(streetName, cityName, stateName, zipCode) {
  this.streetName = streetName;
  this.cityName = cityName;
  this.stateName = stateName;
  this.zipCode = zipCode;
}



$(document).ready(function() {
  $("#delivery").click(function() {
    $("#address").show();
  });
  $("#pickUp").click(function() {
    $("#address").hide();
  })
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("#size input[type='radio']:checked").val();
    var toppingsInput = $("input:checkbox[name=toppings]:checked").length;
    var methodInput = $("#method input[type='radio']:checked").val();
    var newPizza = new pizza(sizeInput, toppingsInput, methodInput);
    newPizza.pizzaSizePrice(sizeInput);
    newPizza.toppingsPrice(toppingsInput);
    newPizza.pickUpMethodPrice(methodInput);
    console.log(sizeInput.length);
    console.log(toppingsInput);
    console.log(methodInput.length);
    if(price > 0 && sizeInput.length > 0 && toppingsInput > 0 && methodInput.length > 0) {
    $("#priceOutput").append("Your order price is $" + price);
    console.log("price is working")
    } else {
      console.log("price is not working")
    }
  });
});
