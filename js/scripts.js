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
  } else if(selected === "deliver") {
    return 10;
  } else {
    console.log("Something went wrong in pickUpMethod");
  }
}

pizza.prototype.finalPrice(size, toppings, pickUpMethod) {
  var price = size + toppings + pickUpMethod;
  return price;
}

