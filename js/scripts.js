function pizza(size, toppings, pickUpMethod) {
  this.size = size;
  this.toppings = toppings;
  this.pickUpMethod = pickUpMethod;
}

pizza.prototype.size = function(s) {
  if(s === "small") {
    return "small";
  } else if(s === "medium") {
    return "medium";
  } else if(s === "large") {
    return "large"
  } else {
    console.log("something went wrong in size")
  }
}
