//store the products array in localstorage as "products"

document.querySelector("#product_form").addEventListener("submit", formFun);

let dataArray = JSON.parse(localStorage.getItem("products")) || []; // Array of data that admin will put

// This function will take all the data. create an object of it and then push it in dataArray and also store in localStorage
function formFun(event) {
  event.preventDefault();

  let name = document.querySelector("#name").value;
  let price = document.querySelector("#price").value;
  let type = document.querySelector("#type").value;
  let image = document.querySelector("#image").value;

  function createObj(n, p, t, i) {
    this.name = n;
    this.price = p;
    this.type = t;
    this.image = i;
  }

  let obj = new createObj(name, price, type, image);

  dataArray.push(obj);

  console.log(obj);
  localStorage.setItem("products", JSON.stringify(dataArray));
}

document.querySelector("#show_products").addEventListener("click", takeMe);

function takeMe() {
  window.location.href = "/inventory.html";
}
