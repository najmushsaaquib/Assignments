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
