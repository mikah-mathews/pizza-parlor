function pizza(size, toppings, pickUpMethod) {
  this.size = size;
  this.toppings = toppings;
  this.pickUpMethod = pickUpMethod;
}

pizza.prototype.size = function(s) {
  if(s === "small") {
    return 10;
  } else if(s === "medium") {
    return 12;
  } else if(s === "large") {
    return 15;
  } else {
    console.log("something went wrong in size");
  }
}

pizza.prototype.toppings = function(amountChecked) {
  var toppingsPrice = amountChecked * .5;
  return toppingsPrice;
}

pizza.prototype.pickUpMethod = function(selected) {
  if(selected === "pickUp") {
    return 0;
  } else if(selected === "delivery") {
    return 10;
  } else {
    console.log("Something went wrong in pickUpMethod");
  }
}

pizza.prototype.finalPrice = function(size, toppings, pickUpMethod) {
  var price = size.val() + toppings.val() + pickUpMethod.val();
  return price;
};

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("#size input[type='radio']:checked").val();
    // #toppings input[type='checkbox']:checked
    var toppingsInput = $("input:checkbox[name=toppings]:checked").length;
    var methodInput = $("#method input[type='radio']:checked").val();
    var newPizza = new pizza(sizeInput, toppingsInput, methodInput);
    console.log(newPizza.size);
    console.log(newPizza.toppings);
    console.log(newPizza.pickUpMethod);
  });
});
