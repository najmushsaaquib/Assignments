 // let box1 = document.querySelector("#box1");
 // let box2 = document.querySelector("#box2");
 // let box3 = document.querySelector("#box3");
 // let box4 = document.querySelector("#box4");
 // let box5 = document.querySelector("#box5");

// document.querySelector("#form-box").addEventListener("submit", clickMe);

function clickMe(event) {
  event.preventDefault();

  if (box1.checked) {
    console.log(box1.value);
  }

  if (box2.checked) {
    console.log(box2.value);
  }
  if (box3.checked) {
    console.log(box3.value);
  }

  if (box4.checked) {
    console.log(box4.value);
  }
  if (box5.checked) {
    console.log(box5.value);
  }
}


function runProgram(input=''){
  input = input.trim().split("\n")
  let x = +input[0]
  let n = +input[1]
  console.log(power(x,n))
  // console.log(x,n)
  
}


function power(x,n){
  if(n===0) return 1;
  
  let xnb2 = power(x,n/2)
  let xn = xnb2 * xnb2
  
  if(n%2 == 1) {
      xn = xn * x
      
  }
  return xn;
}

if (process.env.USER === "") {
runProgram(`2
5`);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
}