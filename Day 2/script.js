function obj(name, price, type) {
  let Nike = {};

  Nike.name = name;
  Nike.price = price;
  Nike.type = type;

  return Nike;
}

let data = obj("Jordan", 2999, "Shoes");
console.log(data);

function nikeProduct(name, price, type) {
  this.name = name;
  this.price = price;
  this.type = type;
}

let myObj = new nikeProduct("Jordan", 2999, "Shoes");

console.log(myObj);

// function using constructor function

function jethalal(food, morefood) {
  console.log(
    `I have ${this.superpower}, I like ${food} and I like ${morefood}`
  );
}

let thor = {
  superpower: "Hammer",
};
let spiderman = {
  superpower: "Spider web",
};
let IronMan = {
  superpower: "Jarvis",
};

jethalal.call(thor, "Jalebi", "fafda");
