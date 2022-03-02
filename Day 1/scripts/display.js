//here retrieve the generated number from Localstorage.

let numberArr = JSON.parse(localStorage.getItem("number"));

console.log(numberArr);

let data = numberArr[0].number;

console.log(data);

let show = document.querySelector("h1")
show.innerText = data;

if (data === 6) {
  show.style.color = "green";
} else if (data === 1) {
  show.style.color = "yellow";
} else {
  show.style.color = "red";
}
