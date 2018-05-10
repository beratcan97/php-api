let registerBtn = document.getElementById("registerBtn");
let registerForm = document.getElementById("register_form");
let loginForm = document.getElementById("login_form");
let loginUsername = document.getElementById("login_username");
let loginPassword = document.getElementById("login_password");
let loginBtn = document.getElementById("login_btn");
let logoutBtn = document.getElementById("logout");

if (registerForm === !null) {
  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    api.post("register", formData);
    // api.index(); // tillbaka till index.php
  });
}

if (isset(loginBtn)) {
  loginBtn.addEventListener('click', function(event) {
    let formData = new FormData();
    formData.append("username", loginUsername.value);
    formData.append("password", loginPassword.value);
    api.login(formData);
    // api.index();
  });
}


if (isset(logoutBtn)) {
  logoutBtn.addEventListener("click", function() {
    // api.logout();
    // api.index();
    console.log("Logged out");
    window.location = "/";
  })
}


function isset(item) {
  return item !== null;
}
