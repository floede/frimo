var foodEaten = [];
var onShelf = "";

var addFood = function () {
  var foods = ["tomato", "cucumber", "salad", "chilli", "nuts"];
  var shelf = document.getElementById("food-shelf");
  var food = foods[Math.floor(Math.random() * foods.length)];
  onShelf = food;
  shelf.innerText = food;
};

var eatFood = function () {
  //console.log("foodEaten: ", foodEaten);
  foodEaten.push(onShelf);
  var history = document.getElementById("food-eaten");
  history.innerText = foodEaten;
};
