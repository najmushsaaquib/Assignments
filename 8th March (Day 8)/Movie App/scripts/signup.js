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

document.querySelector("#form-box").addEventListener("submit", signupForm);

let singupArr = JSON.parse(localStorage.getItem("loginData")) || [];

function signupForm(event) {
  event.preventDefault();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let contact = document.querySelector("#contact").value;
  let password = document.querySelector("#password").value;

  if (name == "" || email == "" || contact == "" || password == "") {
    alert("Please fill all the details.");
  } else {
    function obj(name, em, pass) {
      this.name = name;
      this.email = em;
      this.password = pass;
    }

    let data = new obj(name, email, password);

    singupArr.push(data);
    console.log(data);
    console.log(singupArr);

    localStorage.setItem("loginData", JSON.stringify(singupArr));

    alert("Signup Successful    ");

    document.querySelector("#name").value = null;
    document.querySelector("#email").value = null;
    document.querySelector("#contact").value = null;
    document.querySelector("#password").value = null;
  }
}
