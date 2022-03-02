//Store the generated number in LocalStorage with key "number".

let dice = document.createElement("button");
dice.innerText = "Throw Me";
dice.setAttribute("id", "throw_dice");
document.body.append(dice);

document.querySelector("#throw_dice").addEventListener("click", throwMe);
console.log("I am workng");

let dataArr = [];

function throwMe() {
  console.log(Math.floor(Math.random() * 6));
  let num = {
    number: Math.floor(Math.random() * 6) + 1,
  };

  dataArr.push(num);
  localStorage.setItem("number", JSON.stringify(dataArr));

  window.location.href = "/display.html";
}
