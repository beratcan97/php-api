let registerBtn = document.getElementById("registerBtn");
let registerForm = document.getElementById("register_form");

registerForm.addEventListener('submit', function() {
  e.preventDefault();
  let formData = new FormData(this);
  api.post("register", formData);
  api.get("/");
})
