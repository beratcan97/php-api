let registerBtn = document.getElementById("registerBtn");
let registerForm = document.getElementById("register_form");

registerForm.addEventListener('submit', function() {
  e.preventDefault();
  console.log(this);
  const formData = new FormData(this);
  console.log(formData);
  // api.post("register", formData);
  // api.get("users");
});
