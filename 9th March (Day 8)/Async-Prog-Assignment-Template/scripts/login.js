function eye() {
  let pass = document.querySelector("#password");
  let open = document.getElementById("open-eye");
  let close = document.getElementById("close-eye");

  if (pass.type === "password") {
    pass.type = "text";
    open.style.display = "block";
    close.style.display = "none";
  } else {
    pass.type = "password";
    open.style.display = "none";
    close.style.display = "block";
  }
}

let loginArr = JSON.parse(localStorage.getItem("loginData"));
console.log(loginArr);

document.querySelector("#form-box").addEventListener("submit", loginForm);

function loginForm(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  console.log(email);

  let flag = false;
  for (let i = 0; i < loginArr.length; i++) {
    if (email == loginArr[i].email && pass == loginArr[i].password) flag = true;
  }

  if (flag == true) {
    alert("Login successful");
    window.location.href = "index.html";
  } else {
    alert("Invalid Credentials");
    location.reload();
  }
}
