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
    sessionStorage.clear();
  });
}

//  build entries
async function buildEntries() {
  entriesContainer.innerHTML = "";

  let loader = document.createElement("DIV");
  loader.classList.add("loader");
  document.body.appendChild(loader);

  let userRoute = "entries";
  if (window.location.pathname === "/profile") {
    userRoute = "entries/user/" + sessionStorage.getItem("userID");
  }


  let userEntries = await api.get(userRoute);

  for (let i = 0; i < userEntries.data.length; i++) {
    let commentRoute = "comments/entries/" + userEntries.data[i].entryID;
    let comments = await api.get(commentRoute);

    let likesRoute = "likes/" + userEntries.data[i].entryID;
    let likes = await api.get(likesRoute);
    console.log(likes);

    let newEntry = builder.entries(userEntries.data[i], comments.data, likes.data);
    entriesContainer.appendChild(newEntry);
  }

  loader.remove();
}

if (isset(sessionStorage.getItem("userID"))) {
  buildEntries();
}

console.log(sessionStorage);
