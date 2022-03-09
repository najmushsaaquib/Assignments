document.querySelector("#add_products").addEventListener("click", takeMe);

function takeMe() {
  window.location.href = "/index.html";
}

let dataArray = JSON.parse(localStorage.getItem("products"));
console.log(dataArray);

display(dataArray);

function display(dataArray) {
  document.querySelector("#products_data").innerHTML = null;

  dataArray.map(function (el, ind) {
    let main = document.createElement("div");
    main.setAttribute("id", "main");

    let image = document.createElement("img");
    image.src = el.image;

    let name = document.createElement("span");
    name.innerHTML = el.name;

    let price = document.createElement("span");
    price.innerHTML = el.price;

    let type = document.createElement("span");
    type.innerHTML = el.type;

    let btn = document.createElement("button");
    btn.innerHTML = "Remove";
    btn.addEventListener("click", function () {
      removeMe(ind);
    });

    main.append(image, name, price, type, btn);

    document.querySelector("#products_data").append(main);
  });
}

function removeMe(ind) {
  dataArray.splice(ind, 1);

  display(dataArray);
  console.log("working");
  localStorage.setItem("products", JSON.stringify(dataArray));
}
