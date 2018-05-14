// Helpers
const get = {
  id: arg => document.getElementById(arg),
  class: arg => document.getElementsByClassName(arg)
};

function isset(item) {
  return item !== null;
}


// Declarations
let registerForm = get.id("register_form");
let loginForm = get.id("login_form");
let entryForm = get.id("entry_form");
let entriesContainer = get.id("entries_container");
let signOut = get.id("sign_out");

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

if (isset(entryForm)) {
  entryForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    formData.forEach(item => console.log(item));
    api.post("entries", formData);
    location.reload();
  });
}

if (isset(signOut)) {
  signOut.addEventListener("click", function() {
    localStorage.clear();
  });
}

//  build entries
async function buildEntries() {
  let route = "entries/user/" + localStorage.getItem("userID");
  let userEntries = await api.get(route);

  console.log(userEntries);
  userEntries.data.forEach(entry => {
    entriesContainer.appendChild(builder.entries(entry.title, entry.content));
  });
}

if(isset(localStorage.getItem("userID"))) {
  buildEntries();
}

console.log(localStorage);
