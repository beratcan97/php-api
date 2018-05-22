import { Searchbar } from './components/searchbar/searchbar';
import { buildAdminPanel } from './partials/buildAdminPanel';
import { BuildEntries } from './partials/buildEntries';
import { EntryForm } from './partials/entryForm';
import { SignOut } from './partials/signOut';
import { RegisterForm } from './partials/registerForm';
import { LoginForm } from './partials/loginForm';

// Check if sessionStorage has a userID
if (sessionStorage.getItem('userID')) {
  // Load stuff when logged in
  Searchbar();
  BuildEntries();
  EntryForm();
  SignOut();
  buildAdminPanel();
} else {
  RegisterForm();
  LoginForm();
}
