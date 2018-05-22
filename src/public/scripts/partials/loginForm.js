import { get } from '../modules/utils';
import { login } from '../modules/fetch';

export function LoginForm() {
  if (window.location.pathname === '/login') {
    const loginForm = get.id('login_form');

    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      login(formData);
    });
  }
}
