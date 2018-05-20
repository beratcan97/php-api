import * as api from './fetch';
import { get } from './utils';
import { isset } from './utils';
import { BuildEntries } from './buildEntries';
import { Searchbar } from './searchbar';

// Declarations
const registerForm = get.id('register_form');
const loginForm = get.id('login_form');
const entryForm = get.id('entry_form');
const entriesContainer = get.id('entries_container');
const signOut = get.id('sign_out');

// Check session timer if session has timed
if (sessionStorage.getItem('userID')) {
  Searchbar();
  BuildEntries();

  if (isset(entryForm)) {
    entryForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      formData.forEach((item) => console.log(item));
      api.post('entries', formData);
      location.reload();
    });
  }

  signOut.addEventListener('click', () => {
    sessionStorage.clear();
  });
} else {
  if (window.location.pathname == '/register') {
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      api.register(formData);
    });
  }

  if (window.location.pathname == '/login') {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      api.login(formData);
    });
  }
}

console.log(sessionStorage);

export { entriesContainer };
