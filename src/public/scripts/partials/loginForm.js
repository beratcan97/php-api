import { get } from '../modules/utils';
import { login } from '../modules/fetch';

export function LoginForm() {
  const loginForm = get.id('login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      login(formData);
    });
  }
}
