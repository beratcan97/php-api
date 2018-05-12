// Helpers
let get = {
  id: arg => document.getElementById(arg),
  class: arg => document.getElementsByClassName(arg)
};

function isset(item) {
  return item !== null;
}

// Declarations
let registerForm = get.id("register_form");
let loginForm = get.id("login_form");

// login & register
if (isset(registerForm)) {
  registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    api.post("register", formData);
    location.reload();
  });
}

if (isset(loginForm)) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    api.login(formData);
    window.location.href = "/";
  });
}
