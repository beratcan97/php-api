import * as api from "./fetch";
import { get } from "./utils";
import { isset } from "./utils";
import { BuildEntries } from "./buildEntries";
import { Searchbar } from "./searchbar";

// Declarations
let registerForm = get.id("register_form");
let loginForm = get.id("login_form");
let entryForm = get.id("entry_form");
let entriesContainer = get.id("entries_container");
let signOut = get.id("sign_out");

// Check session timer if session has timed
if (sessionStorage.getItem("sessionTimer")) {
  let now = new Date().getTime();
  let sessionTimer = sessionStorage.getItem("sessionTimer");
  console.log(now - sessionTimer);
  // 3600ms * 1000ms = 3600 seconds = 1hour
  if (now - sessionTimer > 3600 * 1000) {
    sessionStorage.clear();
  }

  Searchbar();
  BuildEntries();
}

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

console.log(sessionStorage);

export { entriesContainer };
