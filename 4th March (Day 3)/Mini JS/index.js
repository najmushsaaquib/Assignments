//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.

let scopeObj = {
  p1: "Scope means access to a variable within a program. We have different scopes since we have functions in a program.",
  p2: "Variables declared within a function has the local scope.",
  p3: "Variables declared outside a function has the global scope.",
  p4: "A variable within a function is not accessible from another function",
  p5: "If a variable declared within a function & outside the function, they are treated as separate variables",
};

localStorage.setItem("scope", JSON.stringify(scopeObj));

let hoistingObj = {
  p1: "JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.",
  p2: "Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.",
  p3: "One of the advantages of hoisting is that it lets you use a function before you declare it in your code.",
  p4: "Classes defined using a class declaration are hoisted, which means that JavaScript has a reference to the class.",
  p5: "During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code. This feature is known as hoisting in JavaScript.",
};

localStorage.setItem("hoisting", JSON.stringify(hoistingObj));

let constructorObj = {
  p1: "In a constructor function this does not have a value. It is a substitute for the new object.",
  p2: " The value of this will become the new object when a new object is created.",
  p3: "Which object depends on how this is being invoked (used or called).",
  p4: "You cannot add a new property to an object constructor the same way you add a new property to an existing object",
  p5: "To add a new property to a constructor, you must add it to the constructor function:",
};

localStorage.setItem("constructor", JSON.stringify(constructorObj));

let prototypeObj = {
  p1: "if we want to add new properties at later stage to a function which will be shared across all the instances is prototype",
  p2: "The prototype is an object that is associated with every functions and objects by default in JavaScript",
  p3: "Every function includes prototype object by default.",
  p4: "Every object which is created using literal syntax or constructor syntax with the new keyword, includes __proto__ property ",
  p5: "You can debug and see object's or function's prototype property in chrome or firefox's developer tool. ",
};

localStorage.setItem("prototype", JSON.stringify(prototypeObj));
// console.log('prototype:', prototypeObj)

let host = document.querySelector("#hoisting");

//  getVal(host)

let scope = JSON.parse(localStorage.getItem("scope"));
let hoisting = JSON.parse(localStorage.getItem("hoisting"));
let cons = JSON.parse(localStorage.getItem("constructor"));
let proto = JSON.parse(localStorage.getItem("prototype"));
console.log(scope);

function scopeFun() {   
  mapData(scope);
}

function hoistingFun() {
  mapData(hoisting);
}

function constructorFun() {
  mapData(cons);
}

function prototypeFun() {
  mapData(proto);
}

function mapData(el) {
  document.querySelector("#box").innerHTML = null;

  let ul = document.createElement("ul");

  for (let key in el) {
    let p1 = document.createElement("li");
    p1.innerText = el[key];
    ul.append(p1);
  }
  document.querySelector("#box").append(ul);
}
