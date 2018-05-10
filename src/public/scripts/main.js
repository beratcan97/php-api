let get = {
  id: arg => document.getElementById(arg),
  class: arg => document.getElementsByClassName(arg)
};

function isset(item) {
  return item !== null;
}

let registerBtn = get.id("registerBtn");
let registerForm = get.id("register_form");
let loginForm = get.id("login_form");
let loginUsername = get.id("login_username");
let loginPassword = get.id("login_password");
let loginBtn = get.id("login_btn");

if (isset(registerForm)) {
  registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    api.post("register", formData);
  });
}

if (isset(loginBtn)) {
  loginBtn.addEventListener("click", function(event) {
    let formData = new FormData();
    formData.append("username", loginUsername.value);
    formData.append("password", loginPassword.value);
    api.login(formData);
    location.reload();
  });
}

if (isset(loginForm)) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    api.login(formData);
  });
}
