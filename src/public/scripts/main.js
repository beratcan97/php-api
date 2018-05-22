import * as api from './modules/fetch';
import { get, isset } from './modules/utils';
import { buildAdminPanel } from './partials/buildAdminPanel';
import { BuildEntries } from './partials/buildEntries';
import { Searchbar } from './components/searchbar/searchbar';

// Declarations
const registerForm = get.id('register_form');
const loginForm = get.id('login_form');
const entryForm = get.id('entry_form');
const signOut = get.id('sign_out');

// Check session timer if session has timed
if (sessionStorage.getItem('userID')) {
  Searchbar();

  if (entriesContainer) {
    BuildEntries();
  }

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

  if (window.location.pathname === '/admin') {
    buildAdminPanel();
  }
} else {
  if (window.location.pathname === '/register') {
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      api.register(formData);
    });
  }

  if (window.location.pathname === '/login') {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      api.login(formData);
    });
  }
}
