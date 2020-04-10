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

Address.prototype.fullAddress = function() {
  return this.streetName + " " + this.cityName + " " + this.stateName + " " + this.zipCode;
}


$(document).ready(function() {

  var clicked = false;

  $("#delivery").click(function() { // when delivery button is clicked, it will show address form
    $("#address").show();
    clicked = true;
  });

  $("#pickUp").click(function() {
    $("#address").hide();
    clicked = false;
    console.log(clicked);
  });

  // ask how best to loop through radio buttons
  $("#selectAll").click(function(){
    $(".toppings").prop("checked", true);
  });

  $("form#pizza").submit(function(event) {
    event.preventDefault();
    $("#priceOutput").empty();
    var sizeInput = $("#size input[type='radio']:checked").val();
    var toppingsInput = $("input:checkbox[name=toppings]:checked").length;
    var methodInput = $("#method input[type='radio']:checked").val();
    var inputtedStreetAddress = $("input#new-street-address").val();
    var inputtedCity = $("input#city").val();
    var inputtedState = $("input#new-state").val();
    var inputtedZipCode = $("input#new-zip-code").val();
    var newPizza = new pizza(sizeInput, toppingsInput, methodInput);
    var newAddress = new Address(inputtedStreetAddress, inputtedCity, inputtedState, inputtedZipCode);
    var completeAddress = newAddress.fullAddress();
    newPizza.pizzaSizePrice(sizeInput);
    newPizza.toppingsPrice(toppingsInput);
    newPizza.pickUpMethodPrice(methodInput);
    if(price > 0 && sizeInput.length > 0 && toppingsInput > 0 && methodInput.length > 0) {
      $("#priceOutput").append("Your order price is $" + price);
      $("#pizza").hide();
      $("#Output").show();
    }
    if(clicked === false) {
      console.log("The pizza is going to be picked up");
    } else if(clicked === true) {
      $("#priceOutput").append("<br>" + "The order is to be delivered to " + completeAddress);
    }
  });

  $("#restart").click(function() {
    $("#Output").hide();
    $("#pizza")[0].reset();
    $("#pizza").show();
  });
});
